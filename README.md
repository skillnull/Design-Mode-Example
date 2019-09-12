<p align="center">
  <a href="https://www.skillnull.com"><img src="https://skillnull.com/others/images/brand/MIT.svg" alt="License MIT"></a>
    <a href="https://996.icu"><img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="License"></a>
</p>

#### 设计模式样例

> ###### 参考《大话设计模式》

***
##### 创建型模式(Creational Pattern)

> [工厂模式(Factory Pattern)](/Example/Factory-Pattern.js)

    定义：定义一个创建对象的接口，但让实现这个接口的类来决定实例化哪个类。工厂方法让类的实例化推迟到子类中进行。  
    目的：工厂模式是为了解耦，把对象的创建和使用的过程分开。
    场景：需要生成复杂对象，需要降低耦合度的场景。

> [工厂方法模式(Factory Method Pattern)](/Example/Factory-Method-Pattern.js)

> [单例模式(Singleton Pattern)](/Example/Singleton-Pattern.js)

> [建造者模式(Builder Pattern)](/Example/Builder-Pattern.js)
   
> [抽象工厂模式(Abstract Factory Pattern)](/Example/Abstract-Factory-Pattern.js)

> [原型模式(Prototype Pattern)](/Example/Prototype-Pattern.js)

***
   
##### 结构型模式(Structural Pattern)

> [适配器模式(Adapter Pattern)](/Example/Adapter-Pattern.js)

> [桥接模式(Bridge Pattern)](/Example/Bridge-Pattern.js)

> [组合模式(Composite Pattern)](/Example/Composite-Pattern.js)

> [装饰模式(Decorator Pattern)](/Example/Decorator-Pattern.js)
    
    定义：在不改变原对象的情况下，动态的给对象添加一些额外的职责。就功能而言，装饰模式相比生成子类更为灵活。
    目的：把类的核心职责和装饰功能区分开。可以去除相关类中重复的逻辑。
    场景：当系统需要扩展一个类的功能，或者客户端需要动态的给一个对象添加功能，并且使用继承或生成子类会很复杂的时候。

> [外观模式(Facade Pattern)](/Example/Facade-Pattern.js)

> [享元模式(Flyweight Pattern)](/Example/Flyweight-Pattern.js)

***

##### 行为模式(Behavioral Pattern)
    
> [策略模式(Strategy Pattern)](/Example/Strategy-Pattern.js)

    定义：定义了一族算法； 封装了每个算法； 这族的算法可互换代替。
    目的：将算法的使用与算法的实现分离开来。
    场景：可用来消除大量的条件分支语句。

> [模版方法模式(Template Method Pattern)](/Example/Template-Method-Pattern.js)

> [观察者模式(Observer Pattern)](/Example/Observer-Pattern.js)

> [状态模式(State Pattern)](/Example/State-Pattern.js)

> [备忘录模式(Memento Pattern)](/Example/Memento-Pattern.js)

> [迭代器模式(Iterator Pattern)](/Example/Iterator-Pattern.js)

> [命令模式(Command Pattern)](/Example/Command-Pattern.js)

> [职责链模式(Chain of Responsibility Pattern)](/Example/Chain-Of-Responsibility-Pattern.js)

> [中介者模式(Mediator Pattern)](/Example/Memento-Pattern.js)

> [解释器模式(Interpreter Pattern)](/Example/Iterator-Pattern.js)

> [访问者模式(Visitor Pattern)](/Example/Visitor-Pattern.js)