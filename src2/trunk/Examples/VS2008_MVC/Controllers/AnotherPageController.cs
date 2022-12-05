using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UFrameMVC.Models;
using System.Xml;
using System.Web.Caching;

namespace UFrame2008.Controllers
{
    public class AnotherPageController : Controller
    {
        private const string FLICKR_API_KEY = "c705bfbf75e8d40f584c8a946cf0834c";
        private const string MOST_RECENT = "http://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=" + FLICKR_API_KEY;
        private const string INTERESTING = "http://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=" + FLICKR_API_KEY;
        private const string ENTER_TAG = "http://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + FLICKR_API_KEY + "&tags=";
        private const string FIND_BY_USERNAME = "http://www.flickr.com/services/rest/?method=flickr.people.findByUsername&api_key=" + FLICKR_API_KEY + "&username=";
        private const string FIND_BY_EMAIL = "http://www.flickr.com/services/rest/?method=flickr.people.findByEmail&api_key=" + FLICKR_API_KEY + "&find_email=";
        private const string PHOTOS_FROM_FLICKR_USER = "http://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=" + FLICKR_API_KEY + "&user_id=";
        private const int Rows = 3;
        private const int Columns = 3;

        public ActionResult View(int index)
        {
            return View("View", this.ShowPictures(index));
        }

        private XmlDocument LoadPictures()
        {
            string url = INTERESTING;

            XmlDocument cachedXml = base.HttpContext.Cache[url] as XmlDocument;
            if (null == cachedXml)
            {
                try
                {
                    XmlDocument doc = new XmlDocument();
                    doc.Load(url);
                    base.HttpContext.Cache.Insert(url, doc, null, DateTime.MaxValue, TimeSpan.FromMinutes(10));
                    return doc;
                }
                catch
                {
                    return null;
                }
            }
            else
            {
                return cachedXml;
            }
        }

        private FlickrModel ShowPictures(int pageIndex)
        {
            FlickrModel model = new FlickrModel();
            
            XmlDocument doc = this.LoadPictures();
            if (null == doc) return null;

            List<PhotoInfo> photos = new List<PhotoInfo>();

            foreach (XmlElement e in doc.DocumentElement.GetElementsByTagName("photo"))
            {
                PhotoInfo photo = new PhotoInfo();

                photo.Id = e.GetAttribute("id");
                photo.Owner = e.GetAttribute("owner");
                photo.Title = e.GetAttribute("title");
                photo.Secret = e.GetAttribute("secret");
                photo.Server = e.GetAttribute("server");
                photo.Farm = e.GetAttribute("Farm");

                photos.Add(photo);
            }

            int picturesPerPage = Rows * Columns;
            photos.RemoveRange(0, pageIndex * picturesPerPage);

            if (photos.Count > picturesPerPage)
            {
                photos.RemoveRange(picturesPerPage, photos.Count - picturesPerPage);
                model.ShowNext = true;
            }
            else
            {
                model.ShowNext = false;
            }

            
            if (pageIndex == 0)
            {
                model.ShowPrevious = false;
                model.ShowNext = true;
            }
            else
            {
                model.ShowPrevious = true;
            }

            model.Index = pageIndex;
            model.Photos = photos;

            return model;
        }
    }
}
