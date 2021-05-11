using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace banking_api.Entities
{
    public class Account
    {
        public int id { get; set; }
        public int customer_id { get; set; }
        public int number { get; set; }
        public string password { get; set; }
    }
}
