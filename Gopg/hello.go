package main

import (
	"fmt"
	"time"
)

func main() {
	var a int = 22
	var b, c = 20.133, "Hello"
	var m1, m2, m3 = 90, 80, 75
	//var k int = a--
	//switch

	fmt.Println(time.Now())
	fmt.Println("Type of a is and value is:", a)
	fmt.Println("Value of b:", b)
	fmt.Println("Value of c:", c)

	if a < 20 {
		fmt.Println("Value is Less than 20")
	} else {
		fmt.Println("Value is greater than 20")
	}

	//marksgrade(m1, m2, m3)
	fmt.Println("grade is :", marksgrade(m1, m2, m3))
	//testfor()
	fmt.Println(k)
}

func marksgrade(m1, m2, m3 int) string {

	//var m1, m2, m3

	var grade = "Fail"

	var total = ((m1 + m2 + m3) / 3)

	fmt.Println("Value of Total:", total)

	switch {
	case (total >= 75):
		grade = "Passes with A+ destintion"
	case (total >= 60 && total < 75):
		grade = "Passes with A grade"
	case (total >= 45 && total < 60):
		grade = "Passes with B grade"
	case (total >= 35 && total < 45):
		grade = "Passes with C grade"
	default:
		grade = "F"
	}

	return grade
}

func testfor() {

	for i := 0; i <= 10; i++ {
		fmt.Println("Multiplication Table of :", i)
		for j := 0; j <= i; j++ {
			fmt.Println(i, " * ", j, "  = ", i*j)
		}
	}
}
