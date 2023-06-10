-- Create search indexes on Word
CREATE INDEX idx_word_word ON word (LOWER(word) varchar_pattern_ops);
CREATE INDEX idx_word_meaning ON word (LOWER(meaning) varchar_pattern_ops);
