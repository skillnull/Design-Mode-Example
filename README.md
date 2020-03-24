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

     定义：是用于把抽象化与实现化解耦，使得二者可以独立变化。
     目的：将抽象部分与实现部分分离，使它们都可以独立的变化。
     场景：实现系统可能有多个角度分类，每一种角度都可能变化。

> [组合模式(Composite Pattern)](/Example/Composite-Pattern.js)

     定义：又叫部分整体模式，是用于把一组相似的对象当作一个单一的对象。
     目的：将对象组合成树形结构以表示"部分-整体"的层次结构。
     场景：您想表示对象的部分-整体层次结构(树形结构),如：文件系统。

> [装饰模式(Decorator Pattern)](/Example/Decorator-Pattern.js)
    
    定义：在不改变原对象的情况下，动态的给对象添加一些额外的职责。就功能而言，装饰模式相比生成子类更为灵活。
    目的：把类的核心职责和装饰功能区分开。可以去除相关类中重复的逻辑。
    场景：当系统需要扩展一个类的功能，或者客户端需要动态的给一个对象添加功能，并且使用继承或生成子类会很复杂的时候。
    装饰模式体现了"多用组合，少用继承"这一设计原则。

> [外观模式(Facade Pattern)](/Example/Facade-Pattern.js)

    定义：隐藏系统的复杂性，并向客户端提供了一个客户端可以访问系统的接口。
    目的：为子系统中的一组接口提供一个一致的界面，外观模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。
    场景：客户端不需要知道系统内部的复杂联系，整个系统只需提供一个"接待员"即可。

> [享元模式(Flyweight Pattern)](/Example/Flyweight-Pattern.js)

    定义：减少创建对象的数量，以减少内存占用和提高性能。
    目的：用共享技术有效地支持大量细粒度的对象。
    场景：系统中有大量对象。

***

##### 行为模式(Behavioral Pattern)
    
> [策略模式(Strategy Pattern)](/Example/Strategy-Pattern.js)

    定义：定义了一族算法； 封装了每个算法； 这族的算法可互换代替。
    目的：将算法的使用与算法的实现分离开来。
    场景：可用来消除大量的条件分支语句。

> [模版方法模式(Template Method Pattern)](/Example/Template-Method-Pattern.js)

    定义：一个抽象类公开定义了执行它的方法的方式/模板。它的子类可以按需要重写方法实现，但调用将以抽象类中定义的方式进行。
    目的：一些方法通用，却在每一个子类都重新写了这一方法。
    场景：在造房子的时候，地基、走线、水管都一样，只有在建筑的后期才有加壁橱加栅栏等差异。

> [观察者模式(Observer Pattern)](/Example/Observer-Pattern.js)

    定义：当一个对象被修改时，则会自动通知它的依赖对象。
    目的：定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。
    场景：一个对象（目标对象）的状态发生改变，所有的依赖对象（观察者对象）都将得到通知，进行广播通知。

> [状态模式(State Pattern)](/Example/State-Pattern.js)

    定义：创建表示各种状态的对象和一个行为随着状态对象改变而改变的 context 对象。
    目的：允许对象在内部状态发生改变时改变它的行为，对象看起来好像修改了它的类。
    场景：游戏角色有跳跃、移动、射击、蹲下等状态设定，如果用if-else或者switch来进行判断，在遇到组合动作的时候，判断会变得非常复杂难读，这时可以使用状态模式来实现。
    
> [备忘录模式(Memento Pattern)](/Example/Memento-Pattern.js)

    定义：保存一个对象的某个状态，以便在适当的时候恢复对象。
    目的：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。
    场景：数据缓存。
    
> [迭代器模式(Iterator Pattern)](/Example/Iterator-Pattern.js)

    定义：用于顺序访问集合对象的元素，不需要知道集合对象的底层表示。
    目的：提供一种方法顺序访问一个聚合对象中各个元素, 而又无须暴露该对象的内部表示。
    场景：$.each() for..of。

> [命令模式(Command Pattern)](/Example/Command-Pattern.js)

    定义：请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令。
    目的：将一个请求封装成一个对象，从而使您可以用不同的请求对客户进行参数化。
    场景：要对行为进行"记录、撤销/重做、事务"等处理，这种无法抵御变化的紧耦合是不合适的。在这种情况下，如何将"行为请求者"与"行为实现者"解耦？将一组行为抽象为对象，可以实现二者之间的松耦合。

> [职责链模式(Chain of Responsibility Pattern)](/Example/Chain-Of-Responsibility-Pattern.js)

> [中介者模式(Mediator Pattern)](/Example/Memento-Pattern.js)

> [解释器模式(Interpreter Pattern)](/Example/Iterator-Pattern.js)

> [访问者模式(Visitor Pattern)](/Example/Visitor-Pattern.js)
