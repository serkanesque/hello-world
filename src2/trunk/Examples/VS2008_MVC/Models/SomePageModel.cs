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

namespace UFrame2008.Models
{
    public class SomePageModel
    {
        public string ID { get; set; }
        public string First { get; set; }
        public string Last { get; set; }
        public int Age { get; set; }

        public bool IsPostback { get; set; }
    }
}
