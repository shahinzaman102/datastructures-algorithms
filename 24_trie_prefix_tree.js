
var Trie = function () {
    this.n = {};
    this.isWord = false;
    return this;
    // In JS, constructors implicitly return this, so return this; is optional.
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let curr = this; // this refers to Trie object (where we've props : n & isWord)
    // the inserted first node will be the root node
    let ch;
    for (let i = 0; i < word.length; i++) {
        ch = word[i];
        if (!curr.n[ch]) // curr.n[word[i]] --> next node of curr
            curr.n[ch] = new Trie(ch);
        curr = curr.n[ch];
    }
    curr.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let curr = this, ch;
    for (let i = 0; i < word.length; i++) {
        ch = word[i];
        if (!curr.n[ch])
            return false;
        curr = curr.n[ch];
    }
    return curr.isWord; // reffered to `curr.isWord` - which can be true or false
    // based on the complete word inserted or not
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let curr = this, ch;
    for (let i = 0; i < prefix.length; i++) {
        ch = prefix[i];
        if (!curr.n[ch])
            return false;
        curr = curr.n[ch];
    }
    return true; // this is not a complete word search it's prefix search & which is
    // why it's not need to be taken after complete inserted word 
    // and that's why - it's boolean `true` not `curr.isWord` 
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
