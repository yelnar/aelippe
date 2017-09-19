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
      base: 'АаБбЦцДдЕеФфГгХхИиЙйКкЛлМмНнОоПпҚқРрСсТтҰұВвУуЫыІіЗз',
      vowels: 'ӘәӨөҮү',
      consonant: 'ҒғЧчШшЖж',
      lower: ['ң', 'h'],
      special: ['Ё', 'ё', 'Ц', 'ц', 'Щ', 'щ', 'Э', 'э', 'Ю', 'ю', 'Я', 'я', 'Ь', 'ь', 'Ъ', 'ъ']
    };

    const latin = {
      base: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwYyIiZz',
      vowels: 'AaOoUu',
      consonant: 'GgCcSsZz',
      lower: ['ng', 'h'],
      special: ['Io', 'io', 'Ts', 'ts', 'Sh', 'sh', 'E', 'e', 'Iw', 'iw', 'Ia', 'ia', '', '', '', '']
    };

    const map = new Map();

    Object.keys(cyrillic).forEach((key) => {
      let ending = '';
      if (key === 'vowels') { ending = 'e'; }
      if (key === 'consonant') { ending = 'h'; }

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
    for (let l of text) {
      if (this.alphabet.has(l)) {
        result += this.alphabet.get(l);
      } else {
        result += l;
      }
    }
    return Observable.of(result);
  }
}
