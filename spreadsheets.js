<script src='https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js'></script>
<script type='text/javascript'>
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/12TaWxdp5gRuULZsBL2eGdM01NpohOHqyKRv9-HGL2ZU/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/12TaWxdp5gRuULZsBL2eGdM01NpohOHqyKRv9-HGL2ZU/edit?usp=sharing',
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    alert('Successfully processed!')
    console.log(data);
  }

  window.addEventListener('DOMContentLoaded', init)
