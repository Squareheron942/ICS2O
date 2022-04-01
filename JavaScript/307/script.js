function circle(radius)
{
    this.radius = radius;
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
}
var c = new circle(5);
document.write('Area =', c.area());