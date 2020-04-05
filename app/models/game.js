import Model from '@ember-data/model';
import DS from 'ember-data';

export default DS.Model.extend( {
homeTeam: DS.belongsTo('team', {inverse: 'homeGames'}),
awayTeam: DS.belongsTo('team', {inverse: 'homeGames'}),
homeGoals: DS.attr('number'),
awayGoals: DS.attr('number'),
playedOn: DS.attr('date')
});




