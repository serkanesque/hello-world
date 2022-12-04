using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UFrame2008.Models;

namespace UFrame2008.Controllers
{
    public class SomePageController : Controller
    {
        public ActionResult View(string id, string first, string last, int age)
        {
            return View("Index", new SomePageModel { ID = id, First = first, Last = last, Age = age });
        }

        public ActionResult Update(string id)
        {            
            return View("Index", new SomePageModel { ID = id, 
                First = Request[id + "first"],
                Last = Request[id + "last"],
                Age = int.Parse(Request[id + "age"]),
                IsPostback = true
            });
        }
    }

    
}
