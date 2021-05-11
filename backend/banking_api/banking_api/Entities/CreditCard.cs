using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace banking_api.Entities
{
    public class CreditCard
    {
        public int account_id { get; set; }
        public int id { get; set; }
        public uint number { get; set; }
        public uint cvc { get; set; }
        public uint limit { get; set; }
    }
}
