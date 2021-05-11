using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace banking_api.Entities
{
    public class Transaction
    {
        public int id { get; set; }
        public int account_id { get; set; }
        public DateTime date { get; set; }
    }
}
