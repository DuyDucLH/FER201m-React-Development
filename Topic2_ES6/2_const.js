//Cách cấp phát bộ nhớ cho biến:
//1. Cấp phát bộ nhớ cho biến lưu giá trị Primitive:
// Biến sẽ được cấp phát 1 ô nhớ trong bộ nhớ trên Stack, chứa giá trị của biến. 
//2. Cấp phát bộ nhớ cho biến lưu giá trị Reference:
// Biến sẽ được cấp phát 1 ô nhớ trong bộ nhớ trên Stack, chứa địa chỉ của biến trên Heap.
// Biến trên Heap sẽ được cấp phát 1 ô nhớ, chứa các giá trị của biến.
// Do đó, khi khai báo const, biến lưu giá trị Primitive thì không thể thay đổi giá trị của biến, còn biến lưu giá trị Reference thì vẫn có thể thay đổi giá trị của biến bằng cách thay đổi các giá trị của biến trên Heap.
// Để có thể không thay đổi giá trị của biến lưu giá trị Reference, ta có thể dùng Object.freeze() để đóng băng giá trị của biến.