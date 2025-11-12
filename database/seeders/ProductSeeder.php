<?php

namespace Database\Seeders;

use App\Models\Hamper;
use App\Models\Product;
use App\Models\Variant;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Variant::create([
            'id' => 1,
            'name' => 'Manis',
            'description' => 'Koleksi kue manis premium: perpaduan cokelat lembut, selai buah segar, dan keju manis yang menghadirkan kebahagiaan di setiap gigitan.'
        ]);
        Variant::create([
            'id' => 2,
            'name' => 'Asin',
            'description' => 'Varian asin istimewa: keju panggang, ebi renyah, dan rempah rahasia yang memberi sensasi savory yang bikin ketagihan.'
        ]);
        Variant::create([
            'id' => 3,
            'name' => 'Coklat',
            'description' => 'Rangkaian cokelat intens: choco-chip renyah, medeci lembut, dan perpaduan kacang untuk pengalaman cokelat sejati.'
        ]);

        // Variant Manis
        Product::create(['variant_id' => 1, 'name' => 'Almond Coklat', 'net_weight' => 355, 'price_regular' => 115000, 'price_jar' => 80000]);
        Product::create(['variant_id' => 1, 'name' => 'Almond Oatmeal', 'net_weight' => 320, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 1, 'name' => 'Blueberry', 'net_weight' => 325, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 1, 'name' => 'Cornflake Keju', 'net_weight' => 335, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 1, 'name' => 'Emping Keju', 'net_weight' => 335, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 1, 'name' => 'Greentea', 'net_weight' => 335, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 1, 'name' => 'Lidah Kucing Keju', 'net_weight' => 315, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 1, 'name' => 'Nastar Keju', 'net_weight' => 420, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 1, 'name' => 'Nastar Klasik', 'net_weight' => 420, 'price_regular' => 115000, 'price_jar' => 80000]);
        Product::create(['variant_id' => 1, 'name' => 'Mango Orange', 'net_weight' => 295, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 1, 'name' => 'Kenari Coklat', 'net_weight' => 355, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 1, 'name' => 'Putri Salju Keju', 'net_weight' => 315, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 1, 'name' => 'Putri Salju Mede', 'net_weight' => 320, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 1, 'name' => 'Putri Salju Pandan', 'net_weight' => 320, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 1, 'name' => 'Red Velvet', 'net_weight' => 320, 'price_regular' => 115000, 'price_jar' => 80000]);
        Product::create(['variant_id' => 1, 'name' => 'Sagu Keju', 'net_weight' => 285, 'price_regular' => 115000, 'price_jar' => 80000]);

        // Variant Asin
        Product::create(['variant_id' => 2, 'name' => 'Cheeskrez', 'net_weight' => 355, 'price_regular' => 115000, 'price_jar' => 80000]);
        Product::create(['variant_id' => 2, 'name' => 'Ebi Bawang', 'net_weight' => 365, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 2, 'name' => 'Kastengel', 'net_weight' => 355, 'price_regular' => 115000, 'price_jar' => 80000]);
        Product::create(['variant_id' => 2, 'name' => 'Kastengel Coklat', 'net_weight' => 355, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 2, 'name' => 'Kentang Pedas', 'net_weight' => 365, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 2, 'name' => 'Keju Mede', 'net_weight' => 355, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 2, 'name' => 'Smoked Beef', 'net_weight' => 365, 'price_regular' => 115000, 'price_jar' => 0]);

        // Variant Coklat
        Product::create(['variant_id' => 3, 'name' => 'Choco Mede', 'net_weight' => 365, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 3, 'name' => 'Chocochips', 'net_weight' => 335, 'price_regular' => 115000, 'price_jar' => 80000]);
        Product::create(['variant_id' => 3, 'name' => 'Choco Oreo', 'net_weight' => 315, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 3, 'name' => 'Lidah Kucing Coklat', 'net_weight' => 315, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 3, 'name' => 'Putri Mede', 'net_weight' => 350, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 3, 'name' => 'Sun Lady', 'net_weight' => 335, 'price_regular' => 115000, 'price_jar' => 0]);
        Product::create(['variant_id' => 3, 'name' => 'Medeci', 'net_weight' => 365, 'price_regular' => 115000, 'price_jar' => 80000]);

        // Hampers Idul Fitri
        Hamper::create(['name' => 'Hamper Regular Isi 2', 'description' => '2 toples reguler, Hardbox Premium, Free Greeting Card', 'category' => 'eid', 'price' => 295000]);
        Hamper::create(['name' => 'Hamper Regular Isi 3', 'description' => '3 toples reguler, Hardbox Premium, Free Greeting Card', 'category' => 'eid', 'price' => 420000]);
        Hamper::create(['name' => 'Hamper Regular Isi 4', 'description' => '4 toples reguler, Hardbox Premium, Free Greeting Card', 'category' => 'eid', 'price' => 545000]);
        Hamper::create(['name' => 'Hamper Regular Isi 6', 'description' => '6 toples reguler, Hardbox Premium, Free Greeting Card', 'category' => 'eid', 'price' => 785000]);

        Hamper::create(['name' => 'Hamper Jar Isi 2', 'description' => '2 jar reguler, Hardbox Premium, Free Greeting Card', 'category' => 'eid', 'price' => 225000]);
        Hamper::create(['name' => 'Hamper Jar Isi 3', 'description' => '3 jar reguler, Hardbox Premium, Free Greeting Card', 'category' => 'eid', 'price' => 315000]);
        Hamper::create(['name' => 'Hamper Jar Isi 4', 'description' => '4 jar reguler, Hardbox Premium, Free Greeting Card', 'category' => 'eid', 'price' => 405000]);

        Hamper::create(['name' => 'Hamper Keranjang Isi 4 Toples', 'description' => '4 toples reguler, Keranjang Premium, Free Greeting Card', 'category' => 'eid', 'price' => 535000]);
        Hamper::create(['name' => 'Hamper Keranjang Isi 6 Jar', 'description' => '6 jar reguler, Keranjang Premium, Free Greeting Card', 'category' => 'eid', 'price' => 550000]);

        // Hamper Tahun Baru
        Hamper::create(['name' => 'Hamper Regular Isi 2', 'description' => '2 toples reguler, Hardbox Premium, Free Greeting Card', 'category' => 'new_year', 'price' => 295000]);
        Hamper::create(['name' => 'Hamper Regular Isi 3', 'description' => '3 toples reguler, Hardbox Premium, Free Greeting Card', 'category' => 'new_year', 'price' => 420000]);
        Hamper::create(['name' => 'Hamper Regular Isi 4', 'description' => '4 toples reguler, Hardbox Premium, Free Greeting Card', 'category' => 'new_year', 'price' => 545000]);
    }
}
