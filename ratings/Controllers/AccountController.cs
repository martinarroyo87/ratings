using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ratings.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ratings.Controllers
{
    public class AccountController : Controller
    {
        private readonly ratingsContext _context;
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _host;
        public AccountController(ratingsContext applicationDbContext, IConfiguration configuration, IWebHostEnvironment host)
        {
            _context = applicationDbContext;
        }
        public IActionResult Login(string usuario, string pass)
        {
            bool exiteUsuario = false;

            exiteUsuario = _context.Usuarios.Any(u => u.UserName == usuario & u.Password == pass);

            if (exiteUsuario)
            {
              var usr=  _context.Usuarios.FirstOrDefault(u => u.UserName == usuario & u.Password == pass);
                HttpContext.Session.SetInt32("UsuarioId", usr.UserId);
            }
            
            return Ok(new
            {
                exito = exiteUsuario,
                mensaje = "ok"

            });
        }
        public IActionResult Usuarios()
        {
            return Ok(_context.Usuarios.ToList());
        }
        [HttpGet]
        public IActionResult UsuarioAutenticado()
        {
            return Ok(new
            {
                autenticado = (HttpContext.Session.GetInt32("UsuarioId") != null)
            }
            );
        }
    }
}
