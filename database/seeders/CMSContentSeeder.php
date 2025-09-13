<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CMSContent;
use Carbon\Carbon;


class CMSContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $contents = [
            ['page_key' => 'home_page', 'section_key' => 'hero', 'content_key' => 'title', 'content_value' => 'Pakil'],
            ['page_key' => 'home_page', 'section_key' => 'hero', 'content_key' => 'subtitle', 'content_value' => 'The Pilgrimage Town of Laguna'],
            ['page_key' => 'home_page', 'section_key' => 'hero', 'content_key' => 'slogan', 'content_value' => 'Pakil where fun starts with faith'],
            ['page_key' => 'home_page', 'section_key' => 'hero', 'content_key' => 'feature_title', 'content_value' => 'San Pedro de Alcantara Church'],
            ['page_key' => 'home_page', 'section_key' => 'hero', 'content_key' => 'feature_img', 'content_value' => 'CMSBanner/0eeb0h9j2lxDR8LwyGMgDJVkUNBLcvV3c5RsIq90.jpg'],

            ['page_key' => 'home_page', 'section_key' => 'introduction_section', 'content_key' => 'description', 'content_value' => "Pakil is a fascinating little town located at the foot of Sierra Madre and bordered by Laguna Lake. A visit to our town gives you a peek of the old-world; from the picturesque facade of the San Pedro Garavito de Alcantara Church to the quaint Town Plaza that serves as the center of life of the Pakileños.\r\n\r\nThe town is also known for its rich musical heritage. It is the birthplace of the icon of church music, the Palestrina of the Philippines - Marcelo Adonay. It is also where the first musical academy in the country was initiated by a Guardian of the Franciscan Order, San Pedro Bautista in 1586.\r\n\r\nThis pilgrimage town is also home to the \"Patroness of the Laguna Lake\", the Nuestra Señora de los Dolores de Turumba. The St. Peter de Alcantara Church enshrines the Our Lady of Turumba painting, a replica of the Nuestra Señora de las Antiguas which was found by fishermen on September 15, 1788 after a storm."],
            ['page_key' => 'home_page', 'section_key' => 'introduction_section', 'content_key' => 'title', 'content_value' => 'Introduction to Pakil'],
            ['page_key' => 'home_page', 'section_key' => 'introduction_section', 'content_key' => 'image1', 'content_value' => 'CMSBanner/qt7i6OXJvuqTljIoyuQFiUVxHhp39uMrllu3aZPV.jpg'],
            ['page_key' => 'home_page', 'section_key' => 'introduction_section', 'content_key' => 'image2', 'content_value' => 'CMSBanner/jr6K1M7aNkrMII1yJyjUBSDHrTvB0zIlfI6BHlhF.jpg'],
            ['page_key' => 'home_page', 'section_key' => 'introduction_section', 'content_key' => 'image3', 'content_value' => 'CMSBanner/vCCoHlAC0Z1oE3vKxzw1M5fxxFR48GVbPvUrgIpY.jpg'],
            ['page_key' => 'home_page', 'section_key' => 'introduction_section', 'content_key' => 'facts', 'content_value' => 'Pakil is Home of the Turumba Festival'],
            ['page_key' => 'home_page', 'section_key' => 'introduction_section', 'content_key' => 'highlights', 'content_value' => '[{"text":"Birthplace of Marcelo Adonay, the \"Palestrina of the Philippines\"","icon":"fa-music"},{"text":"Home to Nuestra Señora de los Dolores de Turumba","icon":"fa-church"},{"text":"Hosts the longest religious festival in the country (7 months)","icon":"fa-calendar-day"}]'],

            ['page_key' => 'about_page', 'section_key' => 'about', 'content_key' => 'description', 'content_value' => "The Tourism Department of Pakil, Laguna serves as the primary arm of the local government responsible for the planning, promotion, and sustainable management of the municipality's tourism sector. With Pakil being a town rich in history, culture, and natural beauty, we aim to position the municipality as a premier cultural and eco-tourism destination in Laguna and the Philippines.\r\n\r\nOur mission is to stimulate local economic growth, create livelihood opportunities, and foster pride in the town's heritage while ensuring that development is inclusive and environmentally responsible."],
            ['page_key' => 'about_page', 'section_key' => 'about', 'content_key' => 'image1', 'content_value' => 'CMSBanner/4KbHmmCNAeBniAxxuaCfVmnP3N0pJMIXb1ajo5b9.png'],
            ['page_key' => 'about_page', 'section_key' => 'about', 'content_key' => 'image2', 'content_value' => 'CMSBanner/pt48nBVgy4KW8M73ldpOH7I8qn1FkmfHdiuP2ALz.jpg'],
            ['page_key' => 'about_page', 'section_key' => 'about', 'content_key' => 'image3', 'content_value' => 'CMSBanner/g2fiYDrIsH8oypbJEduPnu8TPjuTs05O9W3m0HFD.jpg'],
            ['page_key' => 'about_page', 'section_key' => 'about', 'content_key' => 'responsibilities', 'content_value' => '[{"title":"Tourism Promotion","icon":"fa-map-marked-alt","desc":"Develop marketing campaigns, produce promotional materials, and build partnerships to increase visitor reach."},{"title":"Heritage Preservation","icon":"fa-church","desc":"Organize cultural events, maintain historical sites, and document local traditions"},{"title":"Tourism Development","icon":"fa-solid fa-building-columns","desc":"Develop tourism sites, improve infrastructure, and identify new opportunities."},{"title":"Visitor Assistance","icon":"fa-user-graduate","desc":"Operate information centers, provide trained guides, and address tourist concerns."}]'],
            ['page_key' => 'about_page', 'section_key' => 'about', 'content_key' => 'facts', 'content_value' => 'Sit consequatur Del'],
            ['page_key' => 'about_page', 'section_key' => 'about', 'content_key' => 'goals', 'content_value' => '[{"title":"Promote Pakil as a premier tourist destination showcasing cultural festivals, heritage sites, and natural attractions"},{"title":"Preserve and protect our heritage and environment for future generations"},{"title":"Foster community involvement in tourism development"},{"title":"Enhance visitor experience through quality services and infrastructure"}]'],
            ['page_key' => 'about_page', 'section_key' => 'mission_vision', 'content_key' => 'mission', 'content_value' => "To provide effective and efficient public service through transparent governance, sustainable development, and preservation of Pakil's cultural heritage while promoting tourism and improving the quality of life for all Pakileños."],
            ['page_key' => 'about_page', 'section_key' => 'mission_vision', 'content_key' => 'vision', 'content_value' => "A progressive, culturally-rich, and spiritually-nourished municipality where empowered citizens enjoy sustainable development, quality public services, and a thriving tourism industry anchored on Pakil's unique heritage and natural beauty."],

            ['page_key' => 'explore_pakil', 'section_key' => 'introduction', 'content_key' => 'description', 'content_value' => "Pakil is a fascinating little town located at the foot of Sierra Madre and bordered by Laguna Lake. A visit to our town gives you a peek of the old-world; from the picturesque facade of the San Pedro Garavito de Alcantara Church to the quaint Town Plaza that serves as the center of life of the Pakileños."],
            ['page_key' => 'explore_pakil', 'section_key' => 'introduction', 'content_key' => 'highlights', 'content_value' => '[{"icon":"fa-music","title":"Musical Heritage","desc":"The town is known for its rich musical heritage. It is the birthplace of the icon of church music, the Palestrina of the Philippines - Marcelo Adonay. It is also where the first musical academy in the country was initiated by a Guardian of the Franciscan Order, San Pedro Bautista in 1586. He trained children choirs called \"tiple\"."},{"icon":"fa-church","title":"Spiritual Heart","desc":"This pilgrimage town is home to the \"Patroness of the Laguna Lake\", the Nuestra Señora de los Dolores de Turumba. The St. Peter de Alcantara Church enshrines the Our Lady of Turumba painting, a replica of the Nuestra Señora de las Antiguas which was found by fishermen on September 15, 1788 after a storm."},{"icon":"fa-calendar-day","title":"Turumba Festival","desc":"The festival in honor of Our Lady of Turumba is the longest religious festival in the country. It consists of seven novenas or \"lupi\" that last for seven months commemorating the seven sorrows of the Virgin Mary."},{"icon":"fa-mountain","title":"Natural Beauty","desc":"If you are looking for a more pristine paradise, a hike to Mount Ping-as would definitely give you a view that is stunningly different. Apart from the luscious foliages, you would see a single large cross, revive spirituality and discover century-old traditions. A destination for the weary and for those who want to escape stress completely!"}]'],
            ['page_key' => 'explore_pakil', 'section_key' => 'introduction', 'content_key' => 'image1', 'content_value' => 'CMSBanner/QaNso7G0lnZ7cEieez1bBTXLM1VpUpaY4uwsguts.png'],
            ['page_key' => 'explore_pakil', 'section_key' => 'introduction', 'content_key' => 'image2', 'content_value' => 'CMSBanner/cDmzWfOhGyoCkLzw0uKWzDuHgRVJEX5L5l33YlzK.jpg'],
            ['page_key' => 'explore_pakil', 'section_key' => 'introduction', 'content_key' => 'image3', 'content_value' => 'CMSBanner/zZrbr8mwFn1zcpbkUurwsqOLLWxZjYJJJxJleqDC.jpg'],
            ['page_key' => 'explore_pakil', 'section_key' => 'introduction', 'content_key' => 'image4', 'content_value' => 'CMSBanner/EeSOkBgxo14oFR4ibchPclM2rU5JgK1I9uFJB4O2.jpg'],

            ['page_key' => 'explore_pakil', 'section_key' => 'municipal_stats', 'content_key' => 'area', 'content_value' => '47.05 sq km (18.16 sq mi)'],
            ['page_key' => 'explore_pakil', 'section_key' => 'municipal_stats', 'content_key' => 'population', 'content_value' => '~23,495'],
            ['page_key' => 'explore_pakil', 'section_key' => 'municipal_stats', 'content_key' => 'growth', 'content_value' => '~2.74%'],
            ['page_key' => 'explore_pakil', 'section_key' => 'municipal_stats', 'content_key' => 'literacy_rate', 'content_value' => '97%'],
            ['page_key' => 'explore_pakil', 'section_key' => 'municipal_stats', 'content_key' => 'employment_rate', 'content_value' => '~93%'],
            ['page_key' => 'explore_pakil', 'section_key' => 'municipal_stats', 'content_key' => 'languages', 'content_value' => 'Filipino, Tagalog, English'],
            ['page_key' => 'explore_pakil', 'section_key' => 'municipal_stats', 'content_key' => 'updated', 'content_value' => 'September 2025'],
        ];

        foreach ($contents as $content) {
            CMSContent::updateOrCreate(
                [
                    'page_key' => $content['page_key'],
                    'section_key' => $content['section_key'],
                    'content_key' => $content['content_key'],
                ],
                [
                    'content_value' => $content['content_value'],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]

            );
        }
    }
}
