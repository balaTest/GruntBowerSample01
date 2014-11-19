using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;

namespace EmptyWebApp1
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            app.UseFileServer();
            //app.Run(async context => {
            //    await context.Response.WriteAsync("Hello World");
            //});
        }
    }
}
