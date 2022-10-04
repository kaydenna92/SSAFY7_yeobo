package com.jagi;

import com.jagi.yeobo.domain.Attraction;
import com.jagi.yeobo.domain.Score;
import com.jagi.yeobo.domain.User;
import com.jagi.yeobo.domain.repository.AttractionRepository2;
import com.jagi.yeobo.domain.repository.ScoreRepository;
import com.jagi.yeobo.dto.ScoreDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Optional;

@SpringBootTest
class YeoboApplicationTests {

	@PersistenceContext
	private EntityManager em;

	@Autowired
	private ScoreRepository scoreRepository;

	@Autowired
	private AttractionRepository2 attractionRepository2;

	@Test
	void contextLoads() {
	}

	@Test
	public void testByUserIdAndAttractionId(){
		long id = 1;

		User user = em.find(User.class,id);
		Attraction attraction = em.find(Attraction.class,127484L);
		Score score = scoreRepository.findByUserIdAndAttractionId(user,attraction);
		System.out.println(score.toString());
	}


	@Test
	public void 여행지점수매기기(){
		ScoreDto scoreDto = new ScoreDto(1,127484,5);
		ScoreDto scoreDto2 = new ScoreDto(1,127484,5);
		Score score = attractionRepository2.saveScore(scoreDto2);
		System.out.println(score.toString());
	}
}