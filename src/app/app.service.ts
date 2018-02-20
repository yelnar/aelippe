/**
 * Yelnar Nauryzbayev
 */

import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class AppService {
  private alphabet: Map<string, string>;

  constructor() {}

  private getAlphabet(): Map<string, string> {
    const cyrillic = {
      base: 'АаБбДдЕеФфГгХхІіИиЙйЖжКкЛлМмНнОоПпҚқРрСсТтҰұВвЫыЗз',
      special: 'ӘәҒғӨөҮүУу',
      lower: ['h', 'ң'],
      other: ['Ё', 'ё', 'Ц', 'ц', 'Э', 'э', 'Ю', 'ю', 'Я', 'я', 'Ш', 'ш', 'Щ', 'щ', 'Ч', 'ч', 'Ь', 'ь', 'Ъ', 'ъ']
    };

    const latin = {
      base: 'AaBbDdEeFfGgHhIiIıIıJjKkLlMmNnOoPpQqRrSsTtUuVvYyZz',
      special: 'ÁáǴǵÓóÚúÝý',
      lower: ['h', 'ń'],
      other: ['Io', 'ıo', 'Ts', 'ts', 'E', 'e', 'Iý', 'ıý', 'Ia', 'ıa', 'Sh', 'sh', 'Sh', 'sh', 'Ch', 'ch', '', '', '', '']
    };

    // const cyrillic = {
    //   base: 'АаБбДдЕеФфГгХхІіЖжКкЛлМмНнОоПпҚқРрСсТтҰұВвЫыЗз',
    //   special: 'ӘәҒғИиЙйӨөШшЧчҮүУу',
    //   lower: ['h', 'ң'],
    //   other: ['Ё', 'ё', 'Ц', 'ц', 'Щ', 'щ', 'Э', 'э', 'Ю', 'ю', 'Я', 'я', 'Ь', 'ь', 'Ъ', 'ъ']
    // };

    // const latin = {
    //   base: 'AaBbDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvYyZz',
    //   special: 'ÁáǴǵÍíÍíÓóŚśĆćÚúÝý',
    //   lower: ['h', 'ń'],
    //   other: ['Io', 'io', 'Ts', 'ts', 'Ś', 'ś', 'E', 'e', 'Iý', 'iw', 'Ia', 'ia', '', '', '', '']
    // };

    const map = new Map();

    Object.keys(cyrillic).forEach((key) => {
      let ending = '';

      if (key === 'special') {
        ending = '\'';
      }

      for (let i = 0; i < cyrillic[key].length; i++) {
        map.set(cyrillic[key][i], latin[key][i] + ending);
      }
    });

    return map;
  }

  translate(text: string): Observable<string> {
    if (!this.alphabet) {
      this.alphabet = this.getAlphabet();
    }

    let result = '';
    for (const l of text) {
      if (this.alphabet.has(l)) {
        result += this.alphabet.get(l);
      } else {
        result += l;
      }
    }
    return Observable.of(result);
  }
}
