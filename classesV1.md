#sample UML diagram for CSC102 class by Zolton Akocs<br>
#ethakocs@uat.edu

Create a diagram with 2 classes, thoes classes need 3 atributes, 3 methods

```mermaid
    classDiagram
    class Shape{
        -length
        -width
        -height
        +getLength()
        +setLength()
        +getWidth()
        +setWidth()
        +getHeight()
        +setHeight()
    }

    class ShapeSig{
        -length : int
        -width : int
        -height : int
        +getLength() : int
        +setLength(n : int) : void
        +getWidth() : int
        +setWidth(n : int) : void
        +getHeight() : int
        +setHeight(n : int) : void
    }


```

Attributes come before properties or methods<br>
\+ public, \- private, \# protected<br><br>

```mermaid
    classDiagram
    class SuperClass{
        
    }

    class SubClass1{
        
    }

    class SubClass2{
        
    }

    SuperClass <|-- SubClass1
    SuperClass <|-- SubClass2


```