import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ fullName: '', email: '', phone: '', education: '' });
  };

  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Медицинское образование</h1>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/5 via-white to-primary/10 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <span className="text-sm font-semibold text-primary">Курс повышения квалификации • 36 часов</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Рациональное назначение и применение противомикробных препаратов
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Проблемы антимикробной резистентности и повышение приверженности иммунопрофилактике
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
                  <Button size="lg" onClick={scrollToForm} className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                    Записаться на программу
                  </Button>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">2 500 ₽</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={18} className="text-primary" />
                    <span>36 академических часов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Laptop" size={18} className="text-primary" />
                    <span>Дистанционный формат</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Award" size={18} className="text-primary" />
                    <span>Удостоверение гос. образца</span>
                  </div>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl"></div>
                <img 
                  src="https://cdn.poehali.dev/files/zensina-lekar-pisusaa-v-bloknote.jpg" 
                  alt="Врач за работой"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-red-600/10 px-6 py-3 rounded-full mb-6">
                <Icon name="AlertCircle" className="text-red-600" size={28} />
                <span className="text-lg font-bold text-red-600">Актуальность программы</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Почему это важно сейчас?</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              <Card className="p-8 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all border-l-4 border-l-red-600">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600/10 p-3 rounded-lg">
                    <Icon name="FileText" className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3 text-foreground">Государственная стратегия</h4>
                    <p className="font-semibold text-primary mb-2">
                      Утверждена Стратегия предупреждения распространения антимикробной резистентности на период до 2030 г.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      (Распоряжение Правительства РФ от 25 сентября 2017 г. № 2045-р)
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all border-l-4 border-l-orange-600">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-600/10 p-3 rounded-lg">
                    <Icon name="TrendingUp" className="text-orange-600" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3 text-foreground">Растущая проблема</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      В последние годы всё чаще используются антибактериальные и противовирусные препараты, что делает крайне важным изучение проблем антимикробной резистентности.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <Card className="mt-8 p-8 bg-gradient-to-r from-primary/5 to-blue-50 border-2 border-primary/20 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Users" className="text-primary" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-3 text-foreground">Необходимость профессиональной подготовки</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Одновременно необходимо расширять первичную иммунопрофилактику инфекционных заболеваний, что требует слаженной работы среднего медицинского звена и врачей, особенно на поликлиническом уровне.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="BookOpen" className="text-primary flex-shrink-0" size={32} />
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">О программе</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Эта программа посвящена управлению кризисом антибиотикорезистентности через рациональное применение антибиотиков (назначение их только по показаниям, правильные дозы, длительность) и повышению эффективности иммунопрофилактики, чтобы снизить потребность в антибиотиках, укрепляя естественный иммунитет и уменьшая распространение устойчивых к лекарствам бактерий. Программа охватывает вопросы применения противомикробных химических и биологических средств, по вопросам предупреждения распространения антимикробной резистентности.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 animate-fade-in hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Users" className="text-primary" size={28} />
                  <h3 className="text-xl font-bold">Для кого</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Circle" className="text-primary" size={8} />
                    <span>Врачи</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Circle" className="text-primary" size={8} />
                    <span>Средний медицинский персонал</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 animate-fade-in hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Clock" className="text-primary" size={28} />
                  <h3 className="text-xl font-bold">Формат и продолжительность</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Laptop" className="flex-shrink-0 mt-1" size={16} />
                    <span>Дистанционная форма обучения с использованием современных технологий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Calendar" className="flex-shrink-0 mt-1" size={16} />
                    <span>Количество часов: 36 часов</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="Target" className="text-primary flex-shrink-0" size={32} />
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Результаты обучения</h3>
                <p className="text-muted-foreground mb-4">После прохождения программы вы сможете:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-5 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                    <Icon name="BookOpen" className="text-primary mb-3" size={24} />
                    <p className="text-sm font-medium">Повышение осведомленности о рациональном применении противомикробных лекарств, их адекватной замене</p>
                  </Card>
                  <Card className="p-5 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                    <Icon name="FileCheck" className="text-primary mb-3" size={24} />
                    <p className="text-sm font-medium">Навык обоснования назначения антимикробных средств и выбора АМП при внебольничных инфекциях</p>
                  </Card>
                  <Card className="p-5 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                    <Icon name="Layers" className="text-primary mb-3" size={24} />
                    <p className="text-sm font-medium">Изучение принципов комбинированного назначения антимикробных препаратов</p>
                  </Card>
                  <Card className="p-5 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                    <Icon name="Activity" className="text-primary mb-3" size={24} />
                    <p className="text-sm font-medium">Умение рационально применять антибиотики в амбулаторной практике</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Award" className="text-primary" size={28} />
                  <h3 className="text-xl font-bold">Документ по окончании</h3>
                </div>
                <p className="text-muted-foreground">Выдается удостоверение установленного образца</p>
              </Card>

              <Card className="p-6 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="UserCheck" className="text-primary" size={28} />
                  <h3 className="text-xl font-bold">Преподаватель</h3>
                </div>
                <p className="text-muted-foreground">Программа разработана Заслуженным врачом РФ Иванцовой О.А.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="FileCheck" className="text-primary flex-shrink-0" size={32} />
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Условия поступления</h3>
                  <p className="text-muted-foreground mb-4">Наличие медицинского образования</p>
                  <p className="font-semibold mb-3">Необходимые документы:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="ChevronRight" className="text-primary" size={16} />
                      <span>Базовый диплом об образовании</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="ChevronRight" className="text-primary" size={16} />
                      <span>Сертификат/аккредитация</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="ChevronRight" className="text-primary" size={16} />
                      <span>Паспорт (страницы 2–3)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="ChevronRight" className="text-primary" size={16} />
                      <span>СНИЛС</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="ChevronRight" className="text-primary" size={16} />
                      <span>Свидетельство о браке (если требуется)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="ChevronRight" className="text-primary" size={16} />
                      <span>Электронный и почтовый адрес</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="registration-form" className="py-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <Card className="p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">Записаться на программу</h3>
                <p className="text-lg text-muted-foreground">Начните обучение уже сегодня</p>
                <div className="mt-4 inline-block">
                  <div className="text-3xl font-bold text-primary">2 500 ₽</div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">ФИО *</Label>
                  <Input
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Иванов Иван Иванович"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@mail.ru"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">Образование *</Label>
                  <Input
                    id="education"
                    required
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    placeholder="Высшее медицинское"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">© 2024 Медицинское образование. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}