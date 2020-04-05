using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UFrame2008.Models;

namespace UFrame2008.Views.SomePage
{
    public partial class Index : ViewPage<SomePageModel>
    {
        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (base.IsPostBack) PostbackLabel.Visible = true;
        }   
    }
}
