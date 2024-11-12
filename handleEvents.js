const ecran = document.querySelector('#ecran')
        var orperande1 = 0
        var operator = '+'
        var test = false
        function calculer(g, v) {
            switch (g) {

                case 'ch':
                    if (test) {
                        ecran.value = '0'
                        test = false
                    }
                    if (ecran.value == '0') ecran.value = ''
                    ecran.value += v
                    break;
                case 'op':
                    calculer('eg')
                    orperande1 = ecran.value
                    operator = v
                    //ecran.value = '0'
                    test = true
                    break;
                case 'dec':
                    if (ecran.value.indexOf('.') == -1)
                        ecran.value += '.'
                    break;
                case 'sp':
                    ecran.value = '0'
                    if (v == 'C') {
                        orperande1 = 0
                        operator = '+'
                    }
                    break;
                case 'eg':
                    switch (operator) {
                        case '+':
                            ecran.value = +orperande1 + +ecran.value
                            break
                        case '-':
                            ecran.value = orperande1 - ecran.value
                            break
                        case '/':
                            ecran.value = orperande1 / +ecran.value
                            break
                        case 'x':
                            ecran.value = orperande1 * ecran.value
                            break
                    }
                    break;

            }
        }




        