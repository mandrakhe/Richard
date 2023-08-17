using System.ComponentModel.DataAnnotations;

namespace BKProyecto.models
{
    public class TarjetaCredito
    {
        [Key]   
        
        public int Id { get; set; }
        [Required]
        public string Titular { get; set; }
        [Required]
        public string NumeroTarjeta { get; set; }
        [Required]
        public string Expiracion { get; set;}
        [Required]
        public string Cvv { get; set;}
    }
}
