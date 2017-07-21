import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;

    constructor(private _http:Http){
        
    }
    
    searchMusic(str:string, type='artist'){

const access_token = 'BQAOcfc9ewoaf4MsVa4qt7nOT-TUn_yRiXsywduSFLd7bup2ViPCm1EUfrym5dDckdbvTHKKVABPCKc_ILajG4_LdXPsan7DtQvIdyooqBRbsYX2CxnN4n7p3PNvWtnd9vflVnJ-abXEA6E';
      
      const headers = new Headers({ 'Authorization': 'Bearer ' + access_token });
        let options = new RequestOptions({ headers: headers });

        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl,options)
            .map(res => res.json());
    }

    


    getArtist(id:string){
      
      const access_token= 'BQDJSyo3GeP5HG7u8zfkBtAHCaurnJRnRA0qYYHMyvMG1E5BLdRX6srzFAlbsnIhyezJ7qP4NGrq9XsX2sc1b9SVEYNrzqvNMhlv3DRJnmgCLHse3NylPtYRtwAB-34SdMdFAN80kM-RvFU';
      const headers = new Headers({ 'Authorization': 'Bearer ' + access_token });
        let options = new RequestOptions({ headers: headers });


        this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
        return this._http.get(this.artistUrl,options)
            .map(res => res.json());
    }

    getAlbums(artistId:string){

        const access_token= 'BQBw5fYmM3YKkXtD6yASA-97QLRdmlDTSvuU87KtNCaoEnS6Ptm4iThl-hriihxr-38E122fE01-yn5JXFwT0R45bH5n2ReE3-pXkQ5FKOJn08z0jN0_4qxYz3TZG_Gd1DkWmeImY7EBD0E';
      const headers = new Headers({ 'Authorization': 'Bearer ' + access_token });
        let options = new RequestOptions({ headers: headers });

        this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
        return this._http.get(this.albumsUrl,options)
            .map(res => res.json());
    }

    getAlbum(id:string){

     const access_token= 'BQDONF99Jv42KFgUNuXNSjIjQyZHTU8LtkYe29gJnqpJ4D80uWPsAA9jWxWNL34Mr7e2QT0rz9LRgHquHR6EWtqEoxGIjm5y6OEQ9SAMXLawcV94ug1LeeP7h7uxTuAiYM3jViWEmHs43-8';
      const headers = new Headers({ 'Authorization': 'Bearer ' + access_token });
        let options = new RequestOptions({ headers: headers });

        this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
        return this._http.get(this.albumUrl,options)
            .map(res => res.json());
    }


    }

