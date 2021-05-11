using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace banking_api.Entities
{
    public class Customer
    {
        public int id { get; set; }
        public string name { get; set; }
        public uint rg { get; set; }
        public uint cpf { get; set; }
        public DateTime born_date { get; set; }

    }
}
