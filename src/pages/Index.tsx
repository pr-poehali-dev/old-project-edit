import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const projects = [
    {
      title: "Веб-дизайн проект",
      description: "Современный дизайн для digital агентства",
      image: "https://cdn.poehali.dev/projects/8164abe7-9e0a-4355-aed0-cc23b48222d1/files/3f3f3f84-8fa8-47f5-a9d4-181360ae40e5.jpg",
      tags: ["UI/UX", "Веб-дизайн"]
    },
    {
      title: "Мобильное приложение",
      description: "Минималистичный интерфейс для iOS",
      image: "https://cdn.poehali.dev/projects/8164abe7-9e0a-4355-aed0-cc23b48222d1/files/0e356956-e81e-498b-b1c8-ab5e30dfe5f1.jpg",
      tags: ["Mobile", "Дизайн"]
    },
    {
      title: "Брендинг",
      description: "Комплексный фирменный стиль",
      image: "https://cdn.poehali.dev/projects/8164abe7-9e0a-4355-aed0-cc23b48222d1/files/3f3f3f84-8fa8-47f5-a9d4-181360ae40e5.jpg",
      tags: ["Брендинг", "Графика"]
    }
  ];

  const skills = [
    { name: "UI/UX Дизайн", icon: "Palette" },
    { name: "Веб-разработка", icon: "Code" },
    { name: "Брендинг", icon: "Sparkles" },
    { name: "Прототипирование", icon: "Layout" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-heading font-bold">Портфолио</h1>
          <div className="flex gap-8">
            <a href="#work" className="hover:text-muted-foreground transition-colors">Работы</a>
            <a href="#skills" className="hover:text-muted-foreground transition-colors">Навыки</a>
            <a href="#contact" className="hover:text-muted-foreground transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-heading font-bold mb-6 leading-tight">
              Дизайнер<br />
              & Разработчик
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Создаю минималистичные и функциональные digital продукты, которые решают реальные задачи
            </p>
            <Button size="lg" className="rounded-sm">
              Посмотреть работы
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="work" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-heading font-bold mb-12">Избранные работы</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-heading font-semibold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-3 py-1 bg-primary text-primary-foreground rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-heading font-bold mb-12">Навыки</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-8 border border-border rounded-sm hover:bg-secondary/50 transition-colors group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon 
                  name={skill.icon as any} 
                  size={32} 
                  className="mb-4 group-hover:scale-110 transition-transform" 
                />
                <h4 className="font-heading font-semibold text-lg">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-heading font-bold mb-6">Свяжитесь со мной</h3>
          <p className="text-lg mb-12 opacity-90">
            Готов обсудить ваш проект и воплотить идеи в жизнь
          </p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input 
                placeholder="Ваше имя" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Input 
                type="email" 
                placeholder="Email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
            </div>
            <Textarea 
              placeholder="Расскажите о вашем проекте" 
              rows={5}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button 
              size="lg" 
              variant="secondary"
              className="rounded-sm"
            >
              Отправить сообщение
            </Button>
          </form>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-muted-foreground transition-colors">
              <Icon name="Github" size={20} />
            </a>
            <a href="#" className="hover:text-muted-foreground transition-colors">
              <Icon name="Linkedin" size={20} />
            </a>
            <a href="#" className="hover:text-muted-foreground transition-colors">
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
