using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PROYECTO_NET.Data
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        public string Name { get; set; }

        [DataType(DataType.Date)]  

        public DateTime Datebir { get; set; }
        
      

    }
}
