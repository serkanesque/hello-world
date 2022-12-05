<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="View.aspx.cs" Inherits="UFrame2008.Views.AnotherPage.View" %>
<%@ OutputCache NoStore="true" Location="None" %>
<%@ Import Namespace="UFrame2008.Controllers" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title></title>
    <style type="text/css">
    #flickr a { color: navy }
    </style>

</head>
<body>
    <div id="flickr">        
        <center>
        <table>
        <%
            int row = 0, col = 0, Columns = 3;
            foreach (UFrameMVC.Models.PhotoInfo photo in ViewData.Model.Photos)
            {
                if (col == 0) Response.Write("<tr>");


                Response.Write("<td>");
                Response.Write(string.Format("<a href=\"{0}\" target=\"_blank\" title=\"{1}\">", photo.PhotoPageUrl, Html.Encode(photo.Title)));
                Response.Write(string.Format("<img src=\"{0}\" width=\"{1}\" height=\"{2}\" border=\"0\" />", photo.PhotoUrl(true), 75, 75));
                Response.Write("</a></td>");
                
                col++;
                if (col == Columns)
                {
                    col = 0; row++;
                }                
            }
        %>
        </table>
        <%
            if (ViewData.Model.ShowPrevious) Response.Write(Html.ActionLink<AnotherPageController>(x => x.View(ViewData.Model.Index - 1), "< Previous"));
            Response.Write(" | ");
            if (ViewData.Model.ShowNext) Response.Write(Html.ActionLink<AnotherPageController>(x => x.View(ViewData.Model.Index + 1), "Next >"));
        %>
        
        </center>
    </div>
</body>
</html>
