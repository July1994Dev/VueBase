<script setup>
import { onMounted, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { JQJuly } from '../../../utils/ExternalVariables.js';

const isData = ref(true);
const hasFooter = ref(false);
const id = uuidv4();
const items = [{"id":2600,"user_id":5391,"title":"Vicinus tego vobis necessitatibus porro curriculum amiculum brevis comis tot.","body":"Vitium ceno dedecor. Antepono acerbitas verus. Voluptatum coniecto pecunia. Assentator votum deorsum. Terga adopto decumbo. Porro copia adipiscor. Turbo sed ars. Et terror suspendo. Accommodo pariatur adsuesco. Attonbitus sordeo amissio. Defendo confido vel. Candidus est demonstro. Arbor acceptus velociter. Vinco conservo aspicio. Vel sint qui. Eveniet facilis absens. Pecto causa paulatim."},{"id":2599,"user_id":5390,"title":"Turba spectaculum voco qui administratio acsi.","body":"Bellum arx quis. Denuncio synagoga aetas. Consectetur adduco civis. Animi alter sordeo. Bellicus acervus demoror. Porro cometes dignissimos. Advenio beatus quia. Vel fugiat veritatis. Utrum ut crinis. Curvo apud timor. Natus est alo. Tricesimus eos amo. Aegre astrum a. Vito pecco avoco. Veritatis theca stultus."},{"id":2595,"user_id":5383,"title":"Ambulo in error deputo antiquus usitas damno defendo laborum ut vulticulus umquam.","body":"Corpus demonstro natus. Varius atrox sumo. Deporto supra eos. Articulus tristis aut. Vomica videlicet tametsi. Arx statim et. Dolores derideo vilicus. Deduco vindico modi. Crux versus sustineo. Virgo canis utrimque. Supellex succurro apostolus. Corrupti patior angulus. Amissio a volva. Tribuo aut charisma. Tollo sono comparo. Demum pax temporibus. Thema victoria aut. Curatio consequatur claudeo. Thymum vesper molestiae."},{"id":2594,"user_id":5383,"title":"Libero tres aggredior curtus demoror aliquam utroque caecus.","body":"Trado videlicet ustilo. Denuo supra ago. Deserunt supellex vis. Coepi in tenetur. Textor sophismata succurro. Ambulo altus vesper. At adflicto varius. Territo vesper et. Quos sed degusto. Volup stillicidium adduco. Vulnero doloribus vehemens. Terga capillus ubi. Dolor via depromo. Consequatur tabesco ut. Cedo cresco capitulus. Torqueo ver talus. Tibi caute cuius."},{"id":2593,"user_id":5380,"title":"Benevolentia considero sit esse aestivus amet vorax sodalitas paulatim voluptatum trucido error.","body":"Tandem similique voluptatem. Tergum blandior tenuis. Crudelis utique abduco. Subnecto umerus vorago. Vis amet verus. Succedo ceno demergo. Absorbeo mollitia degero. Ducimus voluptate audeo. Aufero valde deripio. Crur ademptio vix. Altus truculenter thema. Stabilis curvus conicio. Anser contabesco conitor. Amet certus facere. Suppono creber debilito. Verecundia tam concido."},{"id":2592,"user_id":5377,"title":"Acies cado quis urbanus antea artificiose vere conturbo adhaero combibo arca depereo explicabo cognatus nemo nostrum.","body":"Custodia adamo concedo. Nostrum templum vobis. Omnis cubo careo. Color tertius arma. Quis defetiscor basium. Viriliter tricesimus vaco. At quia labore. Vae terra abeo. Asporto terreo bibo. Aperio comburo est. Pauper ea voluptas. Curto sint ventosus. Vulariter sollicito excepturi. Consequatur commodo decipio. Universe admitto cado. Abscido studio appositus."},{"id":2591,"user_id":5375,"title":"Aetas tepidus depono benigne odio cimentarius deinde comis talus tracto vulgus colligo.","body":"Tabula aperio ver. Cavus sordeo debilito. Turbo accommodo circumvenio. Ars atavus tredecim. Suffragium theologus soluta. Centum villa tubineus. Summa coniuratio taceo. Sed ocer derideo. Adduco desparatus vinitor. Vulgivagus teres sto. Usus cultura deprecator. Cuppedia contabesco theologus. Torrens pariatur spectaculum. Temperantia vacuus ulterius. Cerno currus molestiae. Catena abutor cultellus. Vel illo valens. Aliquam thalassinus alius. Quas eaque quibusdam."},{"id":2590,"user_id":5368,"title":"Vulpes aliquid caecus aut conforto victoria soleo pax eos sustineo collum aestas vallum.","body":"Tantum censura cunctatio. Vociferor canonicus degenero. Delectatio varius venustas. Coruscus quis adipiscor. Cernuus aliquid strues. Aptus laborum triumphus. Compello cornu basium. Solitudo aurum odit. Amor condico admiratio. Aperio sono desino. Vulnus capto magnam. Absconditus arca victus. Aveho conculco alius. Allatus absens cogito. Debilito cornu amoveo. Thalassinus degero ultio."},{"id":2589,"user_id":5366,"title":"Totidem fuga studio templum suus ipsa ut tendo usque stultus convoco argentum sed absens quis confugo textor explicabo contra.","body":"Thymbra abeo ea. Certo ustulo delinquo. Sophismata cupiditate delibero. Crux umbra canonicus. Acies tamisium corroboro. Adduco odio dolores. Subseco claro carcer. Uxor vicinus colo. Sunt accommodo strenuus. Thesaurus pecus crux. Ab sol cicuta. In texo subvenio. Crinis consequatur deficio. Appello velut consequatur. Aiunt curatio votum. Dolorem ea armarium. Basium valeo capillus. Summisse desipio suscipio. Decet molestias vere."},{"id":2588,"user_id":5361,"title":"Talus calcar ullus tondeo ulterius terreo confero sed voveo.","body":"Vergo voveo perspiciatis. Defetiscor cito absque. Laborum suffoco a. Agnitio tolero auditor. Tener depono venia. Cognomen aeger somnus. Tutamen solium debilito. Nihil approbo theca. Aurum sunt ipsam. Vinitor studio maiores. Audax color traho. Et eius carmen. Vitae defessus thorax. Sunt atrocitas deorsum. Beatus caries videlicet. Stillicidium somniculosus adipisci. Harum armarium cras. Tabella strenuus usque."}];

const columns = items && items.length > 0 ? Object.keys(items[0]) : [];

onMounted(() => {
    isData.value = items && items.length > 0;
    JQJuly.exec(`#${id}`).DataTable();
});

</script>
<template>
    <table v-if="isData" :id="id" class="table table-hover table-striped table-bordered w-100">
        <thead>
            <tr>
                <th v-for="c in columns">{{ c }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in items">
                <td v-for="c in columns">{{ i[c] }}</td>
            </tr>
        </tbody>
        <tfoot v-if="hasFooter">
            <tr>
                <th v-for="c in columns">{{ c }}</th>
            </tr>
        </tfoot>
    </table>
    <div v-else class="text-center">
        No hay datos para mostrar
    </div>
</template>