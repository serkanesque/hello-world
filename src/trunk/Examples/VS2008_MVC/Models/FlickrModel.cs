using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Collections.Generic;

namespace UFrameMVC.Models
{
    public class FlickrModel
    {
        public List<PhotoInfo> Photos { get; set; }
        public bool ShowNext { get; set; }
        public bool ShowPrevious { get; set; }
        public int Index { get; set; }
    }
}
