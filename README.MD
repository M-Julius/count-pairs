# Soal: Jumlah Pasangan yang Mendapatkan Jumlah Tertentu
Buat sebuah fungsi countPairs yang menerima dua parameter: sebuah array dari angka-angka (number[]) dan sebuah angka target (number). Fungsi tersebut harus menghitung dan mengembalikan berapa banyak pasangan angka dalam array yang jumlahnya sama dengan angka target.

Setiap pasangan angka hanya boleh dihitung sekali, meskipun angkanya muncul lebih dari satu kali dalam array.

Contoh:
```js
countPairs([1, 3, 2, 2, 3, 4], 5); // Output: 2
countPairs([1, 1, 1, 1], 2); // Output: 1
countPairs([1, 2, 3, 4, 5], 7); // Output: 2
```
## Penjelasan:
- **Input pertama**: Pasangan yang menghasilkan jumlah 5 adalah (1, 4) dan (3, 2) (dua kali, namun hanya dihitung sekali per pasangan).
- **Input kedua**: Pasangan yang menghasilkan jumlah 2 adalah (1, 1) yang muncul satu kali.
- **Input ketiga**: Pasangan yang menghasilkan jumlah 7 adalah (2, 5) dan (3, 4).


## Instruksi:
- Definisikan tipe untuk parameter dan nilai kembalian.
- Gunakan pendekatan yang efisien, yaitu menghindari perhitungan yang berulang.
- Setiap pasangan (a, b) yang muncul dalam array harus dihitung hanya sekali, meskipun mereka muncul beberapa kali.
