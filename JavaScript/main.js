function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
      document.getElementById('apiResult').innerText = JSON.stringify(data, null, 2);
    });
  
  function showDiv(num) {
    var divs = ['div1', 'div2', 'div3'];
    divs.forEach(function(id, index) {
      document.getElementById(id).style.display = (index + 1 === num) ? 'block' : 'none';
    });
  }
  