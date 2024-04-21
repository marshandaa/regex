$(function ()
{
    const namaRegex = /^[a-zA-Z\s]+$/;
    const nimRegex = /^\d{9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const konfirmasipasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    $('input').each(function ()
    {

        $(this).on('input', function ()
        {
            const pElement = $(this).parent().siblings().filter('p');

            if ($(this).attr('id') == 'name')
            {
                if (namaRegex.test($(this).val()))
                {
                    // $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    // $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Valid Name')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    // $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    // $(this).addClass("focus:ring-rose-400")

                    pElement.html('Invalid Name! Must be an alpabeth.')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "nim")
            {
                if (nimRegex.test($(this).val()))
                {
                    // $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    // $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Valid Nim')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    // $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    // $(this).addClass("focus:ring-rose-400")

                    pElement.html('Nim invalid!Nim must be a number!')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "email")
            {
                if (emailRegex.test($(this).val()))
                {
                    // $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    // $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Valid email adress')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    // $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    // $(this).addClass("focus:ring-rose-400")

                    pElement.html('Invalid email address')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "password")
            {
                if (passwordRegex.test($(this).val()))
                {
                    // $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    // $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Password is strong')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    // $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    // $(this).addClass("focus:ring-rose-400")

                    pElement.html('Password is not strong enough, try to add some special chars!.')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "confirm_password")
            {
                const isMatch = $(this).val().match(konfirmasipasswordRegex);

                if (isMatch)
                {
                    // $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    // $(this).addClass("focus:ring-rose-400")

                    pElement.html('Found ' + isMatch.length + (isMatch.length < 2 ? ' duplicate' : ' duplicates') + ' &#128530')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
                else
                {
                    // $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    // $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Invalid password')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-emerald-300')
                }
            }
        })
    })
})
