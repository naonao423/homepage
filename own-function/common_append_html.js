//  this javascript is desighed for appending new html which is common in all webpage.

// navbar

function append_html_content(){
  append_content = `
                <li class="nav-item active">
                  <a class="nav-link" href="homepage.html">Home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="programing.html">Programming</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about_me.html">About me</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Urls.html">Urls</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="donetable.html">Todos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="datas.html">Data</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="setting.html">Setting</a>
                </li>
                </li>
                <li class="nav-item">
                  <button type="button" class="text-white nav-link btn btn-outline-danger" id="logout">Logout</button>
                </li>
            `
  $('#navcontent').append(append_content)
  $("#summary").text("tests")
}
