pragma solidity >=0.4.22 <0.7.0;

//import "./2_Owner.sol";

contract Election
{
    struct Candidate
    {
        uint candidateId;
        string candidateName;
        uint voteCount;
    }

    //mapping(Key=>value) <mapping name>
    //mapping(datatype of cand_id => candidate_struct) <name>
    mapping(uint => Candidate) candidates;

    //store voters
    mapping(address => bool) voters;

    //no_ofcandiadates
    uint candidateCount = 0;

    event VoteEvent(uint candidateId);

    constructor () public
    {
        add_candidate('Cand001');
		add_candidate('Cand002');
        add_candidate('Cand003');
		add_candidate('Cand004');
		add_candidate('Cand005');
		add_candidate('Cand006');
    }

    function add_candidate(string memory _candidateName) private
    {
        candidateCount = candidateCount+1;
        candidates[candidateCount] = Candidate(candidateCount, _candidateName, 0);

    }

    function get_candidate() view public returns(uint)
    {
       return candidateCount;
    }

    function vote(uint _id) public
    {
        //require voter has not voted before
        require (!voters[msg.sender],'Voter casted Vote earlier');
        //require a valid candidate
        require(_id > 0 && _id<= candidateCount, 'Valid Candidate');
        //record voter had voted
        voters[msg.sender] = true;
        //update candiadate vote count
        candidates[_id].voteCount++;
        //trigger voted event
        emit VoteEvent(_id);
    }
}
