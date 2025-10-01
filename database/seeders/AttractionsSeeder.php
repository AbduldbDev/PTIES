<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AttractionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * Populates the attractions table with initial data.
     */
    public function run()
    {
        DB::table('attractions')->insert([
            [
                'id' => 1,
                'attraction_id' => 'PKLBQBNA',
                'name' => 'Saint Peter of Alcantara Parish Church',
                'category' => 'religious',
                'operating_hours' => 'Monday – Saturday: 6AM – 6PM 
                Sunday: 5:30AM – 6PM',
                'information' => 'The Turumba Church, a historic Spanish-era Catholic church built in Corinthian and Ionic architectural style, is one of Pakil’s most treasured landmarks. It houses the venerated oil painting of Our Lady of Sorrows of Turumba, the centerpiece of devotion during the renowned Turumba Festival. This grand celebration begins on the Friday before Holy Week and continues in “lupi” (processions) over seven months, drawing pilgrims and visitors from near and far. 
                The church itself is richly adorned, featuring side retablos, a large main retablo with saints, a floral relief façade, and an old bell tower that echoes the town’s deep religious heritage. Inside, visitors can also explore its ecclesiastical museum, which showcases memorabilia and artworks by local artists, preserving both faith and culture. Feast days are celebrated every September 15 in honor of Our Lady of Turumba and October 19 for San Pedro de Alcantara, making the church not only a site of worship but also a vibrant cultural hub for the community.',
                'history' => 'This is where the Nuestra Señora delos Dolores de Turumba is enshrined since 1788. It is also one of the best-preserved Spanish era churches, exhibiting Corinthian and lonic architectural design, in Laguna today. Construction of the church started in 1732 and was completed in 1767. Reconstruction was done several times due to fires and earthquakes in the past.',
                'local_rules' => 'Dress modestly 
                Maintain silence and respectful behavior inside 
                No smoking around the church 
                Observe mass times 
                No commercial photos/videos without prior permission 
                No using of flash when taking photos',
                'fun_facts' => 'The Turumba festival in Pakil is one of the longest Marian religious festivals in the Philippines, comprising seven novenas over seven months to commemorate the Seven Sorrows of Mary.
                The word “Turumba” is believed to come from the Tagalog phrase “natumba sa laki ng tuwa” 
                Pakil has a strong tradition of church music. Historically, children were trained as choir members and how to make instruments from local materials.',
                'fees' => 'Free Entrance',
                'contact' => '[{"name":"Saint Peter of Alcantara Parish Church","position":"Official Email","contact":"spappakil.turumbashrine@gmail.com"}]',
                'images' => '["\\/default\\/Attractions\\/68dd38bf8d6db_1759328447.jpg","\\/default\\/Attractions\\/68dd38bf8f126_1759328447.jpg","\\/default\\/Attractions\\/68dd38bf8f499_1759328447.jpg"]',
                'distance' => '1.2km',
                'long' => 121.478769,
                'lat' => 14.381009,
                'points' => 1000,
                'qr_path' => '/default/QRcodes/PKLBQBNA_qrcode.png',
                'created_at' => '2025-10-01 11:59:59',
                'updated_at' => '2025-10-01 14:20:47'
            ],
            [
                'id' => 2,
                'attraction_id' => 'PKLEPTHL',
                'name' => 'Turumba Spring Swimming Pool (also known as Panghulo)',
                'category' => 'nature',
                'operating_hours' => 'Open day and night',
                'information' => 'The Turumba Spring Swimming Pool, locally known as Panghulo, is a natural spring-fed pool located in Barangay Baño. For generations, it has been a favorite spot for locals and pilgrims seeking a refreshing break after visiting the nearby Turumba Church. 
                Simple yet charming, the spring offers cool, clear waters that invite both residents and visitors to swim, relax, and unwind. Its closeness to the parish makes it a natural extension of the pilgrimage experience during the Turumba festivities, blending recreation with cultural and spiritual significance.',
                'history' => 'The Turumba Spring, locally called Panghulo, has long been vital to the people of Pakil as a source of drinking water, bathing, and irrigation. Once a swamp, it was later cleaned during the Spanish era and became central to daily life and health in the community. The area was once a swamp until Father Fernando de Haro supervised the clearing of the area. The church was also being built simultaneously at that time in 1732. Over time, it grew into a public bathing pool and was officially claimed by the municipal government in the early 1900s. Improvements were made across generations, with significant renovations supported by local leaders and even First Lady Aurora A. Quezon in 1938.',
                'local_rules' => 'Keep the area clean; dispose of trash properly 
                Swim at your own risk (no lifeguards on duty) 
                No alcohol consumption within the pool premises 
                Be mindful of noise, as the site is near a church and residential area 
                Respect local customs and residents',
                'fun_facts' => 'Locals believe that the spring’s water never runs dry, even during the hottest months. 
                It is common for Turumba devotees to take a dip here after the processions, considering it part of their tradition.',
                'fees' => 'Libre basta sabihin mo kilala mo apo ni Florecito si coycoy yung pogi',
                'contact' => '[{"name":"Direct Access, No Contact Needed","position":null,"contact":null}]',
                'images' => '["\\/default\\/Attractions\\/68dd38b78a692_1759328439.jpg","\\/default\\/Attractions\\/68dd38b791726_1759328439.jpg","\\/default\\/Attractions\\/68dd38b791afc_1759328439.jpg"]',
                'distance' => '1.2km',
                'long' => 121.478769,
                'lat' => 14.381009,
                'points' => 1500,
                'qr_path' => '/default/QRcodes/PKLEPTHL_qrcode.png',
                'created_at' => '2025-10-01 12:11:48',
                'updated_at' => '2025-10-01 14:20:39'
            ],
            [
                'id' => 3,
                'attraction_id' => 'PKLTHYAD',
                'name' => 'Mt. Ping-as Pilgrimage Park',
                'category' => 'nature',
                'operating_hours' => 'Accessible Anytime',
                'information' => 'Mt. Ping-as is a well-known pilgrimage site in Pakil, situated on a hilltop marked by a towering white cross and the 14 Stations of the Cross that line its trail. Every last Saturday of May, the community gathers here for the annual “Ahunan sa Ping-as”, a religious trek and mass that has been part of local tradition since 1671. 
                The hike, though reaching an elevation of about 500 meters above sea level, is considered manageable even for children and the elderly. Along the way, pilgrims pause at each Station of the Cross—installed by civic groups—to reflect and pray, making the journey both spiritual and communal. At the summit, the cross and panoramic views serve as a rewarding reminder of faith, devotion, and unity in Pakil.',
                'history' => 'The devotion to Mt. Ping-as traces back to as early as 1671, when locals began the tradition of climbing the hill in honor of the Holy Cross. Over the centuries, the site became a pilgrimage destination, strengthened by community efforts to establish the Stations of the Cross and the large cross at the summit. The annual Ahunan sa Ping-as has since become an enduring religious tradition that highlights Pakil’s strong faith and unity.',
                'local_rules' => 'Keep the trail clean; do not litter 
                Respect pilgrims who are praying along the way 
                No vandalism on religious markers or natural features 
                Stay on designated paths for safety 
                Proper attire recommended, especially during the pilgrimage event',
                'fun_facts' => 'From the summit of Mt. Ping-as, visitors can enjoy panoramic views of Laguna de Bay and the Sierra Madre Mountain range. 
                The white cross at the top is visible from several parts of town, serving as a spiritual beacon for Pakileños.',
                'fees' => 'Free Entrance',
                'contact' => '[{"name":"Direct access, No Contact Needed.","position":null,"contact":null}]',
                'images' => '["\\/default\\/Attractions\\/68dd38b070727_1759328432.jpg","\\/default\\/Attractions\\/68dd38b07208a_1759328432.jpg","\\/default\\/Attractions\\/68dd38b0725c5_1759328432.jpg"]',
                'distance' => '2.0 Km',
                'long' => 121.478769,
                'lat' => 14.381009,
                'points' => 2000,
                'qr_path' => '/default/QRcodes/PKLTHYAD_qrcode.png',
                'created_at' => '2025-10-01 12:17:21',
                'updated_at' => '2025-10-01 14:20:32'
            ],
            [
                'id' => 4,
                'attraction_id' => 'PKL1EVFZ',
                'name' => 'Laguna Lake (Estaca)',
                'category' => 'nature',
                'operating_hours' => 'Accessible Anytime',
                'information' => 'The Turumba Festival Swimming Competition, popularly known as the Laguna Lake Cup, is a thrilling race held in the vast waters of Laguna Lake. Swimmers navigate the course from Barangay Kabulusan to Barangay Estaca, testing their strength and endurance while surrounded by the natural charm of Pakil’s lakeside setting. 
                The event not only highlights the athletic spirit of its participants but also showcases the scenic beauty of the town. With Laguna Lake dividing Pakil into Silangan and Kanluran, and the Sierra Madre Mountain range painting a majestic backdrop, the competition offers both excitement and a uniquely serene atmosphere for visitors and locals alike.',
                'history' => 'Laguna Lake is the largest freshwater lake in the Philippines and has long been part of Pakil’s livelihood and culture. Fishing and transport across its waters supported local communities for centuries. In modern times, it has also become a venue for cultural and sporting events like the Laguna Lake Cup, blending tradition with recreation and highlighting the town’s connection to its natural environment.',
                'local_rules' => 'Observe safety when swimming or boating 
                No littering; protect the lake from pollution 
                Respect local fishermen and their livelihood 
                Follow event marshals’ instructions during competitions 
                Alcohol is not allowed during the swimming event for safety reasons',
                'fun_facts' => 'Laguna de Bay spans about 900 square kilometers, making it the largest lake in Southeast Asia. 
                From certain points in Pakil, you can see both sunrise and sunset over the waters of the lake.',
                'fees' => 'Free Entrance',
                'contact' => '[{"name":"Lake Management","position":"Contact Number","contact":"(049) 557-1766"}]',
                'images' => '["\\/default\\/Attractions\\/68dd38a72159c_1759328423.jpg","\\/default\\/Attractions\\/68dd38a723276_1759328423.jpg","\\/default\\/Attractions\\/68dd38a723644_1759328423.jpg"]',
                'distance' => '400 M',
                'long' => 121.478769,
                'lat' => 14.381009,
                'points' => 2500,
                'qr_path' => '/default/QRcodes/PKL1EVFZ_qrcode.png',
                'created_at' => '2025-10-01 12:22:13',
                'updated_at' => '2025-10-01 14:20:23'
            ],
            [
                'id' => 5,
                'attraction_id' => 'PKLRRS8P',
                'name' => 'Danilo Dalena Residence',
                'category' => 'historical',
                'operating_hours' => 'Accessible Anytime',
                'information' => 'The Danilo Dalena Residence is a beautifully reconstructed bahay-na-bato ancestral home that has been transformed into a cultural gallery. Blending Spanish-era architecture with curated art spaces, it offers visitors a glimpse into the life and legacy of National Artist Danilo Dalena, one of Pakil’s most celebrated sons. 
                Inside, guests can marvel at Dalena’s iconic works, including the renowned Jai-Alai Series and Alibangbang Series, along with paintings inspired by the rich folk life and traditions of his hometown. The residence not only serves as an art haven but also as a cultural landmark, making it a must-visit destination for art lovers, cultural enthusiasts, and anyone seeking to connect with Pakil’s artistic heritage.',
                'history' => 'The Danilo Dalena Residence stands as both a heritage home and a cultural landmark in Pakil. Originally built in the traditional bahay-na-bato style, the ancestral house was reconstructed and later transformed into a gallery to honor the life and works of Danilo Dalena. Dalena, born in Pakil in 1942, drew much of his inspiration from the everyday lives, festivities, and struggles of his hometown, which became recurring themes in his art. 
                In 2018, Dalena was conferred the title of National Artist for Visual Arts, a recognition that further elevated the importance of preserving his legacy. The residence now serves not only as a tribute to his artistic journey but also as a cultural hub where visitors can appreciate the fusion of Spanish-era architecture, modern curation, and the enduring spirit of Pakil’s local heritage.',
                'local_rules' => 'Be respectful at all times. 
                Do not touch any artworks or displays. 
                No food or drinks inside. 
                No smoking or vaping. 
                No littering.',
                'fun_facts' => 'Danilo Dalena was named National Artist for Visual Arts in 2018, cementing his place among the country’s most influential contemporary painters.',
                'fees' => 'Free
                Accepts donation for upkeep and maintenance',
                'contact' => '[{"name":"Direct access, No Contact Needed.","position":null,"contact":null}]',
                'images' => '["\\/default\\/Attractions\\/68dd389addbda_1759328410.jpg","\\/default\\/Attractions\\/68dd389adf3c4_1759328410.jpg","\\/default\\/Attractions\\/68dd389adf697_1759328410.jpg"]',
                'distance' => '14 m',
                'long' => 121.478769,
                'lat' => 14.381009,
                'points' => 3000,
                'qr_path' => '/default/QRcodes/PKLRRS8P_qrcode.png',
                'created_at' => '2025-10-01 12:25:26',
                'updated_at' => '2025-10-01 14:20:10'
            ],
            [
                'id' => 6,
                'attraction_id' => 'PKLJDLWO',
                'name' => 'Clemente Campsite',
                'category' => 'nature',
                'operating_hours' => 'Open Anytime',
                'information' => 'The Clemente Campsite offers a simple yet refreshing outdoor escape in Pakil, Laguna. Nestled in a quiet rural setting surrounded by natural scenery, it is the perfect spot for those who want to spend a night under the stars, enjoy bonfires, and unwind in a laid-back environment. 
                 Affordable and accessible, the campsite is popular for group gatherings, retreats, and family getaways. Visitors can pitch tents, cook meals in the open air, and fully immerse themselves in the calm of nature. Its welcoming atmosphere makes it especially appealing to local youth groups and families seeking a budget-friendly adventure close to home.',
                'history' => 'Clemente Campsite started as a locally known camping ground, gradually becoming a go-to place for barkada outings and family camping activities. Though not yet formally developed as a tourist hub, it has been part of community leisure for years, offering a more grassroots camping experience.',
                'local_rules' => 'Coordinate with the caretaker or barangay before camping. 
                Maintain cleanliness; follow “Leave No Trace” practices. 
                Loud noise and disruptive activities are discouraged at night. 
                Ensure safety when setting up bonfires or cooking outdoors.',
                'fun_facts' => 'Unlike many formal camping resorts, Clemente Campsite maintains its rustic charm — visitors enjoy the feeling of being “off the grid” while still being close to town.',
                'fees' => 'Php 150 entrance fee for 24hrs with free access pool use.
                Php 100 tent pitching.',
                'contact' => '[{"name":"Clemente Campsite Management","position":"Contact Number","contact":"0923 484 2419"}]',
                'images' => '["\\/default\\/Attractions\\/68dd388e675a7_1759328398.jpg","\\/default\\/Attractions\\/68dd388e69963_1759328398.jpg","\\/default\\/Attractions\\/68dd388e69c82_1759328398.jpg"]',
                'distance' => '24.1 km',
                'long' => 121.478769,
                'lat' => 14.381009,
                'points' => 1500,
                'qr_path' => '/default/QRcodes/PKLJDLWO_qrcode.png',
                'created_at' => '2025-10-01 12:33:07',
                'updated_at' => '2025-10-01 14:19:58'
            ]
        ]);
    }
}
