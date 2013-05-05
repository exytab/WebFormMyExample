using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace ExampleWebApp.ajax
{
    /// <summary>
    /// Все 4 [] должны быть иначе нихрена не заработает
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [System.Web.Script.Services.ScriptService]
    public class WebService : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld(string name, int id)
        {
            string result = string.Empty;
            try
            {
                result = string.Format("Привет, {0}! {1}", name, id);
            }
            catch (Exception)
            {
                //Залогировать Exception
            }
            return result;
        }
    }
}
