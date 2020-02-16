const lang = document.getElementById('lang');
const commandments = document.getElementById('commandments');

function checks() {
    if(lang.value == "english") {
        commandments.innerHTML =   `
        <li>There are no stupid questions - just stupid people</li>
        <li>If you don't have a headache, you're doing something wrong</li>
        <li>Always show your code</li>
        <li>Don't answer if you don't have a superiority complex</li>
        <li value="6">Pay attention</li>
        <li>Try not to catch the imposter syndrome. It's running rampant</li>
        <li>Nevermind I fixed it</li>
        <li>No Duplicates</li>
        <li>No Duplicates</li>
        `
    }
    if(lang.value == "python") {
        commandments.innerHTML = `
        <li>Python is too easy</li>
        <li>Try something hard like programming in binary</li>
        `
    }
    if(lang.value == "js") {
        commandments.innerHTML = `
        <li class="code">npm i</li>
        <li class="code">react > vue && react > angular</li>
        <li class="code">vue > react && vue > angular</li>
        `
    }
    if(lang.value == "ruby") {
        commandments.innerHTML =   `
            <li class="code">puts "There are no stupid questions - just stupid people"</li>
            <li class="code">puts "If you don't have a headache, you're doing something wrong"</li>
            <li class="code">puts "Always show your code"</li>
            <li class="code">puts "Don't answer if you don't have a superiority complex"</li>
            <li class="code" value="6">puts "Pay attention"</li>
            <li class="code">puts "Try not to catch the imposter syndrome. It's running rampant"</li>
            <li class="code">puts "It's flex or be flexed on"</li>
            <li class="code">puts "No Duplicates"</li>
            <li class="code">puts "No Duplicates"</li>
        `
    }
}
lang.addEventListener('change', () => {
    checks()
})

checks()