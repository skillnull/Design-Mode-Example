<p align="center">
  <a href="https://www.skillnull.com"><img src="https://skillnull.com/others/images/brand/MIT.svg" alt="License MIT"></a>
</p>

<h4 align="center"> JavaScript 设计模式样例 </h4>

***
##### 创建型模式(Creational Pattern)

> [工厂模式(Factory Pattern)](/Example/Factory-Pattern.js)

    定义：定义一个创建对象的接口，但让实现这个接口的类来决定实例化哪个类。工厂方法让类的实例化推迟到子类中进行。
    目的：工厂模式是为了解耦，把对象的创建和使用的过程分开。
    场景：需要生成复杂对象，需要降低耦合度的场景。

> [单例模式(Singleton Pattern)](/Example/Singleton-Pattern.js)
    
    定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
    目的：阻止其他对象实例化其自己的单例对象的副本，从而确保所有对象都访问唯一实例。
    场景：如一个系统中可以存在多个打印任务，但是同时只能有一个正在工作的任务。

> [建造者模式(Builder Pattern)](/Example/Builder-Pattern.js)

    定义：使用多个简单的对象一步一步构建成一个复杂的对象。
    目的：将一个复杂的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。
    场景：一些基本部件不会变，而其组合经常变化的时候。
   
> [抽象工厂模式(Abstract Factory Pattern)](/Example/Abstract-Factory-Pattern.js)
    
    定义：抽象工厂模式提供了一种方式，可以将一组具有同一主题的单独的工厂封装起来。或者说，是其他工厂的工厂。
    目的：提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。
    场景：系统的产品有多于一个的产品族，而系统只消费其中某一族的产品。
   
> [原型模式(Prototype Pattern)](/Example/Prototype-Pattern.js)

    定义：用于创建重复的对象，同时又能保证性能。
    目的：用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。
    场景：在运行期建立和删除原型。
***
   
##### 结构型模式(Structural Pattern)

> [适配器模式(Adapter Pattern)](/Example/Adapter-Pattern.js)

    定义：将一个类的接口转换成客户希望的另外一个接口，使得原本由于接口不兼容而不能一起工作的那些类能一起工作。
    目的：主要解决在软件系统中，常常要将一些"现存的对象"放到新的环境中，而新环境要求的接口是现对象不能满足的。
    场景：系统需要使用现有的类，而此类的接口不符合系统的需要。

> [桥接模式(Bridge Pattern)](/Example/Bridge-Pattern.js)

> [组合模式(Composite Pattern)](/Example/Composite-Pattern.js)

> [装饰模式(Decorator Pattern)](/Example/Decorator-Pattern.js)
    
    定义：在不改变原对象的情况下，动态的给对象添加一些额外的职责。就功能而言，装饰模式相比生成子类更为灵活。
    目的：把类的核心职责和装饰功能区分开。可以去除相关类中重复的逻辑。
    场景：当系统需要扩展一个类的功能，或者客户端需要动态的给一个对象添加功能，并且使用继承或生成子类会很复杂的时候。
    装饰模式体现了"多用组合，少用继承"这一设计原则。

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
