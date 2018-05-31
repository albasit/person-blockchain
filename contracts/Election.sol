pragma solidity ^0.4.2;

contract Election {
    // Model a Candidate
    struct Person {
        uint cnic;
        string data;
        string added_by;
    }

    // Store accounts that have voted
    mapping(address => bool) public voters;
    // Store Candidates
    // Fetch Candidate
    mapping(uint => Person) public candidates;
    // Store Candidates Count
    uint public candidatesCount;

    // voted event
    event addData (
        uint indexed _candidateId
    );
    //error kia aya?
    //meny is k code ko apny according krny ki koshish ki mgr itni zaida files ma changes krni parti hn k smjh e nai ata krna kya ha

    constructor () public {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate (string _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Person(candidatesCount, _name, 0);
    }

    function addData (uint _candidateId) public {
        // require that they haven't voted before
        require(!voters[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        candidates[_candidateId].voteCount ++;

        // trigger voted event
        //emit votedEvent(_candidateId);
    }
}
