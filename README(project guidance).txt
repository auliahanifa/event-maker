*Note: 
- Project ini belum terintegerasi dengan server-side
- Menggunakan Json file untuk fetch data
- Pada Aplikasi terdapat 3 screen: 
	1. Screen Home (menampilkan carousel data event yang terdapat dalam state)
	2. Screen Add Event (menampilkan form untuk membuat data event baru)
	3. Screen Dashboard (menampilkan all data events dalam data table) 
- Teknologi yang digunakan: 
	Framework: ReactJs
	Library: react-bootstrap, fontawesome, react-multi-carousel (untuk carousel card di screen home)

#Step By Step
1. Clone project
2. di terminal, masuk ke direktori project -> run command: "npm install"
3. npm start
4. jika aplikasi tidak otomatis terbuka di browser, kunjungi: "http://localhost:3000"
5. Pada Navbar terdapat 3 link menu: (Home direpresentasikan dengan menu "Event.create" / logo),
   untuk menu "Add event" akan mengarahkan user ke page yang berisi form "add event"
   untuk menu "Dashboard" akan mengarahkan user ke page yang berisi data table yang memuat semua data events dari file json
   