using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Diagnostics;

namespace UFrame2008
{
    public class GlobalApplication : System.Web.HttpApplication
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            // Note: Change the URL to "{controller}.mvc/{action}/{id}" to enable
            //       automatic support on IIS6 and IIS7 classic mode

            // Controller mapping for SomePage
            routes.Add(new Route("SomePage/{id}/{action}/{first}/{last}/{age}", new MvcRouteHandler())
            {
                Defaults = new RouteValueDictionary(new { controller = "SomePage", action = "View", id = "" } ),
            });

            routes.Add(new Route("SomePage/{id}/{action}", new MvcRouteHandler())
            {
                Defaults = new RouteValueDictionary(new { controller = "SomePage", action = "View", id = "" }),
            });

            routes.Add(new Route("AnotherPage/{action}/{index}", new MvcRouteHandler())
            {
                Defaults = new RouteValueDictionary(new { controller = "AnotherPage", action = "View", index = 0 }),
            });


            routes.Add(new Route("Default.aspx", new MvcRouteHandler())
            {
                Defaults = new RouteValueDictionary(new { controller = "Home", action = "Index", id = "" }),
            });

            // Default mappings
            routes.Add(new Route("{controller}/{action}/{id}", new MvcRouteHandler())
            {
                Defaults = new RouteValueDictionary(new { action = "Index", id = "" }),
            });

            routes.Add(new Route("{controller}.mvc/{action}/{id}", new MvcRouteHandler())
            {
                Defaults = new RouteValueDictionary(new { action = "Index", id = "" }),
            });

            
        }

        protected void Application_Start(object sender, EventArgs e)
        {
            RegisterRoutes(RouteTable.Routes);
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            if (Context.Request.FilePath == "/")
                Context.RewritePath("Default.aspx");
        }

        
    }
}