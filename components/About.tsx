import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Shield, Truck, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "100% Natural",
      description: "No artificial colors, preservatives, or chemicals. Pure and organic spices from certified farms."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Quality Assured",
      description: "Every batch is tested for purity, freshness, and quality. We maintain strict quality standards."
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Fast Delivery",
      description: "Quick delivery across India within 24-48 hours. Fresh products delivered to your doorstep."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Farm Direct",
      description: "Sourced directly from farmers in Kerala, Assam, and Karnataka. Supporting local agriculture."
    }
  ];

  return (
    <section id="about" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Choose Spice Garden?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're passionate about bringing you the finest Indian spices and tea. 
            Our commitment to quality, authenticity, and customer satisfaction sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2020, Spice Garden began as a family venture to share the authentic 
                flavors of Indian spices with the world. We started with a simple mission: 
                to provide pure, high-quality spices directly from Indian farms to your kitchen.
              </p>
              <p>
                Today, we work with over 50 farmers across Kerala, Assam, Karnataka, and Tamil Nadu, 
                ensuring fair trade practices and sustainable farming methods. Every product tells 
                a story of tradition, quality, and the rich heritage of Indian spices.
              </p>
              <p>
                From our family to yours, we're committed to bringing you the freshest, 
                most aromatic spices that will elevate your cooking and connect you to 
                the authentic taste of India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;