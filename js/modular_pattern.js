// The module pattern makes use of closures to bake privacy and state into an object
// Instead of simply writting an object literal{}, we enclosed it in a function (creating a closure)
// Now we return only the public API, everything else is private

function() {
    //private state
    //private functions
    return {
         //public state
         //public variables
    }
}

// Some meat on them bones:

var pollManager = function() {
    //private state
    var alreadyVoted = {};
    var yesVotes = 0;
    var noVotes = 0;

    //return public interface
    return {
        vote : function(name, voteYes) {
            if (alreadyVoted[name]) {
                alert(name + ", you can't vote twice");
            } else {
                alreadyVoted[name] = true;
                voteYes ? yesVotes++ : noVotes++;
            }
        },

        reportTally : function() {
            var results = [];
            results.push("Yes = ");results.push(yesVotes);
            results.push(", No = ");results.push(noVotes);
            return results.join("");
        }
    }
}

var doYouLikeBroccoli = pollManager();
doYouLikeBroccoli.vote("Bob",true);
doYouLikeBroccoli.vote("Mary",false);
doYouLikeBroccoli.vote("Bob",true); //Bob, you can't vote twice
doYouLikeBroccoli.reportTally(); //"Yes = 1, No = 1"
