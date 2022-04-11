/*
 * main.cpp
 *
 *  Created on: 2022. 4. 11.
 *      Author: cskim
 */
#include <iostream>

using namespace std;


void swap1(int p, int q){
	int temp = p;
	p = q;
	q = temp;
}
void swap2(int& p, int& q){
	int temp = p;
	p = q;
	q = temp;
}
void swap3(int arr[]){
	int temp = arr[0];
	arr[0] = arr[1];
	arr[1] = temp;
}
void swap4(int* p, int* q){
	int temp = *p;
	*p = *q;
	*q = temp;
}

int main() {

	int a = 100;
	int b = 200;
	int vals[] = {100, 200};

	a = 100;
	b = 200;
	swap1(a, b);
	cout << a << " " << b << endl;

	a = 100;
	b = 200;
	swap2(a, b);
	cout << a << " " << b << endl;

	swap3(vals);
	cout << vals[0] << " " << vals[1] << endl;

	a = 100;
	b = 200;
	swap4(&a, &b);
	cout << a << " " << b << endl;

	return 0;
}




