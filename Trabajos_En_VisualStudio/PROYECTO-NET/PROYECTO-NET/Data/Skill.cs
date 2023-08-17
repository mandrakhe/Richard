using System.ComponentModel.DataAnnotations;

namespace PROYECTO_NET.Data
{
    public class Skill
    {
        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        public string NameSkill { get; set; }

        [StringLength(500)]
        public string Description { get; set; }
    }
}
