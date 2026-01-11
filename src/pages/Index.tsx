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

      <section className="bg-gradient-to-br from-primary/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Рациональное назначение и применение противомикробных препаратов: проблемы антимикробной резистентности и повышение приверженности иммунопрофилактике
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={scrollToForm} className="text-lg px-8">
                Записаться на программу
              </Button>
              <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                <span>2 500 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="AlertCircle" className="text-red-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Актуальность</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                  <p className="font-semibold text-primary mb-2">
                    Утверждена Стратегия предупреждения распространения антимикробной резистентности на период до 2030 г.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    (Распоряжение Правительства РФ от 25 сентября 2017 г. № 2045-р)
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  В последние годы всё чаще используются антибактериальные и противовирусные препараты, что делает крайне важным изучение проблем антимикробной резистентности.
                  Одновременно необходимо расширять первичную иммунопрофилактику инфекционных заболеваний, что требует слаженной работы среднего медицинского звена и врачей, особенно на поликлиническом уровне.
                </p>
              </div>
            </div>
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