pragma solidity >=0.4.22 <0.7.0;

import "./2_Owner.sol";

contract Election is Owner
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
        require (voters[msg.sender] = true);
        //require a valid candidate
        require(candidates[_id].candidateId > 0);
        //record voter had voted
        voters[msg.sender] = true;
        //update candiadate vote count
        candidates[_id].voteCount++;
        //trigger voted event
        emit VoteEvent(_id);
    }
}
