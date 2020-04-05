import Service from '@ember/service';
import { inject } from '@ember/service'
import { later } from '@ember/runloop';
import { shuffle } from 'ember-composable-helpers/helpers/shuffle';

export default Service.extend( {
    store: inject(),

    init(){
        this._super(...arguments);
        
        console.log('Game sims...');

        this.seedTeams();

        later(this, this.simulateGame, 1000);
    },

    seedTeams(){
        let TeamNames = ['India', 'Team1', 'Team2', 'Team3', 'Team4'];
        
        for(let teamItr = 0; teamItr < TeamNames.length; teamItr++ ){
            this.store.createRecord('team', {id: teamItr, name: TeamNames[teamItr]});
        } 
    },

    simulateGame(){
        let teams = this.store.peekAll('team');
        let shuffledTeams = shuffle(teams);
        let homeTeam = shuffledTeams[0];
        let awayTeam = shuffledTeams[1];
        
        let homeGoals = this.randomScore(4);
        let awayGoals = this.randomScore(3);

        console.log({homeGoals, awayGoals});
    },

    randomScore(maximumGoals){
        return Math.round((Math.random() * maximumGoals));
    }
});