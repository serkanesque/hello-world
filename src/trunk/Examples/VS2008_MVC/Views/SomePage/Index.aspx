<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="UFrame2008.Views.SomePage.Index" %>
<%@ OutputCache NoStore="true" Location="None" %>
<%@ Import Namespace="UFrame2008.Controllers" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title></title>
    
    <script src="/UFrameMVC/Content/Javascripts/jquery-1.2.3.js" type="text/javascript"></script>
    <script src="/UFrameMVC/Content/SomePage.js" type="text/javascript"></script>
    <script type="text/javascript">
    $(document).ready(function()
    {
        var messageId = "#message_<%= ViewData.Model.ID %>";
        if( typeof thisIsSomeFunction == "function" ) 
            $(messageId)
                .css("color", "green")
                .text("Works!");
        else 
            $(messageId)
                .css("color", "red")
                .text("External Javascript Failed to load or failed to initialize before inline Javascript evaluated!");
    });
    </script>
    
    <link rel="Stylesheet" type="text/css" href="/UFrameMVC/Content/SomePage.css" />
    <style type="text/css">
    #somePage #somePageForm input { background-color: lightyellow }
    </style>

</head>
<body>
    <div id="somePage">
    <h1>This is /SomePage output.</h1>
    <p>This is a widget kind of page which can be hosted many times using a unique ID</p>    
    <% using(Html.Form("SomePage", "Update")) { %>
        <asp:Label runat="server" ID="PostbackLabel" Visible="False" EnableViewState="false" Text="Postback worked!" Font-Bold="true" ForeColor="Red"></asp:Label>
        <p>Testing inline javascript:<span id="message_<%= ViewData.Model.ID %>" ></span></p>         
        
        First: <%= Html.TextBox(ViewData.Model.ID + "first", ViewData.Model.First, 30)%><br />
        Last: <%= Html.TextBox(ViewData.Model.ID + "last", ViewData.Model.Last, 30)%><br />
        Age: <%= Html.TextBox(ViewData.Model.ID + "age", ViewData.Model.Age.ToString(), 3)%><br />
        
        <%= Html.SubmitButton() %>        
        
    <% } %>
    </div>
</body>
</html>
